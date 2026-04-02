// Liquid Glass (phase 1)
// Reusable section controller. Renders a subtle animated caustics/highlight field
// behind opted-in cards (.liquid-card) inside a section (.glass-section).

const DEFAULTS = {
  maxCards: 24,
  devicePixelRatioCap: 2,
  // Interaction-driven animation window.
  activeMs: 1400,
  // Minor time-based drift so it feels alive while active.
  timeScale: 0.001,
};

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Produces subtle caustic lines + soft blooms around card centers.
const FRAG = `
precision highp float;
varying vec2 v_uv;
uniform vec2 u_res;
uniform float u_time;
uniform float u_cardCount;
uniform vec4 u_cards[24]; // (cx, cy, rx, ry) in UV space

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0,0.0));
  float c = hash(i + vec2(0.0,1.0));
  float d = hash(i + vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
}

float fbm(vec2 p){
  float v = 0.0;
  float a = 0.55;
  for(int i=0;i<5;i++){
    v += a * noise(p);
    p *= 2.02;
    a *= 0.55;
  }
  return v;
}

void main(){
  vec2 uv = v_uv;

  // aspect-correct space for patterns
  vec2 p = (uv - 0.5) * vec2(u_res.x / u_res.y, 1.0);

  float t = u_time;

  // Slow drift field
  vec2 q = p;
  q += vec2(0.11, -0.07) * t;

  float n = fbm(q * 2.2);
  float n2 = fbm((q + vec2(1.7, 2.3)) * 3.4);

  // Caustic-like lines via ridge function
  float ridge = 1.0 - abs(2.0*n - 1.0);
  ridge = pow(ridge, 2.8);

  float ridge2 = 1.0 - abs(2.0*n2 - 1.0);
  ridge2 = pow(ridge2, 3.2);

  float caustics = 0.65 * ridge + 0.35 * ridge2;

  // Card blooms: compute a soft mask around each card.
  float bloom = 0.0;
  float edge = 0.0;
  for(int i=0;i<24;i++){
    if(float(i) >= u_cardCount) break;
    vec4 c = u_cards[i];
    vec2 d = (uv - c.xy) / max(c.zw, vec2(1e-3));
    float r = length(d);

    // soft bloom inside + around card
    float b = exp(-2.2 * r*r);
    bloom += b;

    // thin edge shimmer
    float e = smoothstep(1.1, 0.98, r) - smoothstep(0.98, 0.92, r);
    edge += e;
  }
  bloom = clamp(bloom, 0.0, 1.0);
  edge = clamp(edge, 0.0, 1.0);

  // Combine: keep subtle. Color: SVX blue/purple-ish.
  vec3 c1 = vec3(0.31, 0.48, 1.00); // blue
  vec3 c2 = vec3(0.62, 0.20, 0.97); // purple

  float shimmer = caustics * (0.18 + 0.55*bloom);
  shimmer += 0.12 * edge;

  // Slight vignette to avoid hard edges
  float vig = smoothstep(0.95, 0.25, length(uv - 0.5));

  vec3 col = mix(c2, c1, 0.55 + 0.45*sin(t*0.7));
  col *= shimmer;
  col *= vig;

  // Premultiplied-ish alpha
  float a = clamp(shimmer * 1.35, 0.0, 0.35);
  gl_FragColor = vec4(col, a);
}
`;

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function compile(gl, type, src){
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if(!gl.getShaderParameter(s, gl.COMPILE_STATUS)){
    const err = gl.getShaderInfoLog(s);
    gl.deleteShader(s);
    throw new Error(err || 'Shader compile failed');
  }
  return s;
}

function link(gl, vs, fs){
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if(!gl.getProgramParameter(p, gl.LINK_STATUS)){
    const err = gl.getProgramInfoLog(p);
    gl.deleteProgram(p);
    throw new Error(err || 'Program link failed');
  }
  return p;
}

function prefersReducedMotion(){
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

export class LiquidGlassSection {
  static MAX_CARDS = 24;

  /**
   * @param {HTMLElement} sectionEl
   * @param {{maxCards?: number}} opts
   */
  constructor(sectionEl, opts = {}){
    this.section = sectionEl;
    this.opts = {
      ...DEFAULTS,
      ...opts,
      maxCards: clamp(opts.maxCards ?? DEFAULTS.maxCards, 0, LiquidGlassSection.MAX_CARDS),
    };

    this.layer = sectionEl.querySelector('.liquid-glass-layer');
    this.canvas = this.layer ? this.layer.querySelector('canvas') : null;
    if(!this.layer || !this.canvas) throw new Error('LiquidGlassSection requires .liquid-glass-layer > canvas');

    this.cards = [];
    this.cardRects = [];

    this.gl = null;
    this.prog = null;
    this.buf = null;

    this.uRes = null;
    this.uTime = null;
    this.uCardCount = null;
    this.uCards = null;

    this.dirty = true;
    this.running = false;
    this.visible = true;
    this.activeUntil = 0;
    this.lastTime = performance.now();

    this._ro = null;
    this._io = null;
    this._onScroll = null;
    this._onResize = null;
    this._onPointer = null;
  }

  mount(){
    // WebGL init (safe fail)
    const gl = this.canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false });
    if(!gl) return;
    this.gl = gl;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = link(gl, vs, fs);
    this.prog = prog;

    this.uRes = gl.getUniformLocation(prog, 'u_res');
    this.uTime = gl.getUniformLocation(prog, 'u_time');
    this.uCardCount = gl.getUniformLocation(prog, 'u_cardCount');
    this.uCards = gl.getUniformLocation(prog, 'u_cards');

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]), gl.STATIC_DRAW);
    this.buf = buf;

    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    this.refreshCards();
    this._bindObservers();
    this._resize();

    // Initial render
    this._bumpActivity();
    this._startLoop();
  }

  unmount(){
    this._unbindObservers();
    this.running = false;
    // let GC handle WebGL resources (good enough for phase 1)
  }

  refreshCards(){
    const nodes = Array.from(this.section.querySelectorAll('.liquid-card'));
    const max = this.opts.maxCards;
    this.cards = nodes.slice(0, max);
    this._markDirty();
  }

  _bindObservers(){
    // ResizeObserver keeps us in sync with layout changes.
    this._ro = new ResizeObserver(() => {
      this._resize();
      this._markDirty();
      this._bumpActivity();
    });
    this._ro.observe(this.section);
    this.cards.forEach(c => this._ro.observe(c));

    // IntersectionObserver: pause animation when offscreen.
    this._io = new IntersectionObserver((entries) => {
      const e = entries[0];
      this.visible = !!(e && e.isIntersecting);
      if(this.visible){
        this._bumpActivity();
        this._startLoop();
      }
    }, { root: null, threshold: 0.05 });
    this._io.observe(this.section);

    this._onScroll = () => { this._markDirty(); this._bumpActivity(); this._startLoop(); };
    this._onResize = () => { this._resize(); this._markDirty(); this._bumpActivity(); this._startLoop(); };
    window.addEventListener('scroll', this._onScroll, { passive: true });
    window.addEventListener('resize', this._onResize, { passive: true });

    // Pointer movement makes highlights feel responsive.
    this._onPointer = () => { this._markDirty(); this._bumpActivity(); this._startLoop(); };
    this.section.addEventListener('pointermove', this._onPointer, { passive: true });
  }

  _unbindObservers(){
    if(this._ro){ this._ro.disconnect(); this._ro = null; }
    if(this._io){ this._io.disconnect(); this._io = null; }
    if(this._onScroll) window.removeEventListener('scroll', this._onScroll);
    if(this._onResize) window.removeEventListener('resize', this._onResize);
    if(this._onPointer) this.section.removeEventListener('pointermove', this._onPointer);
  }

  _markDirty(){ this.dirty = true; }

  _bumpActivity(){
    const now = performance.now();
    this.activeUntil = Math.max(this.activeUntil, now + this.opts.activeMs);
  }

  _resize(){
    if(!this.canvas) return;
    const dpr = clamp(window.devicePixelRatio || 1, 1, this.opts.devicePixelRatioCap);
    const rect = this.layer.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if(this.canvas.width !== w || this.canvas.height !== h){
      this.canvas.width = w;
      this.canvas.height = h;
      this._markDirty();
    }
  }

  _computeCardUniforms(){
    const sectionRect = this.section.getBoundingClientRect();
    const out = new Float32Array(LiquidGlassSection.MAX_CARDS * 4);

    // If section is zero-sized, avoid NaNs.
    const sw = Math.max(1, sectionRect.width);
    const sh = Math.max(1, sectionRect.height);

    const count = this.cards.length;
    for(let i=0;i<count;i++){
      const r = this.cards[i].getBoundingClientRect();
      const cx = ((r.left - sectionRect.left) + r.width * 0.5) / sw;
      const cy = ((r.top - sectionRect.top) + r.height * 0.5) / sh;
      // radii in UV
      const rx = (r.width * 0.55) / sw;
      const ry = (r.height * 0.55) / sh;

      out[i*4+0] = cx;
      out[i*4+1] = cy;
      out[i*4+2] = rx;
      out[i*4+3] = ry;
    }
    return { count, data: out };
  }

  _startLoop(){
    if(this.running) return;
    this.running = true;

    const reduce = prefersReducedMotion();
    const tick = (now) => {
      if(!this.running) return;

      // pause loop when not visible + not dirty
      if(!this.visible && !this.dirty){
        this.running = false;
        return;
      }

      const active = !reduce && now < this.activeUntil;
      if(!active && !this.dirty){
        this.running = false;
        return;
      }

      if(active) this.dirty = true; // time drift

      if(this.dirty){
        this._render(now);
        this.dirty = false;
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  _render(now){
    const gl = this.gl;
    if(!gl || !this.prog) return;

    // Keep observers aligned if cards were added later.
    // (phase 1: simple and safe)
    const currentCards = this.section.querySelectorAll('.liquid-card').length;
    if(currentCards !== this.cards.length){
      this.refreshCards();
      if(this._ro){
        this._ro.disconnect();
        this._ro.observe(this.section);
        this.cards.forEach(c => this._ro.observe(c));
      }
    }

    this._resize();
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    gl.useProgram(this.prog);
    gl.uniform2f(this.uRes, this.canvas.width, this.canvas.height);

    const t = (now - this.lastTime) * this.opts.timeScale;
    // use absolute-ish time but keep numbers small
    gl.uniform1f(this.uTime, (now * this.opts.timeScale));

    const { count, data } = this._computeCardUniforms();
    gl.uniform1f(this.uCardCount, count);
    gl.uniform4fv(this.uCards, data);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    this.lastTime = now;
  }
}
