// Liquid Glass — WebGL refraction for the sticky side-card only.
// Based on liquid-glass-reference/webgl.html shader logic (single-card).

const GLASS_PRESET = {
  radius: 51,
  thickness: 60,
  bezel: 60,
  ior: 3.0,
  blur: 1.5,
  specular: 0.30,
  tint: 0.08,
  shadow: 0.25,
};

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function prefersReducedMotion(){
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

const VERT = `
attribute vec2 a_pos;
varying vec2 vUv;
void main(){
  vUv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// NOTE: This fragment shader is a lightly-adapted version of reference webgl.html
// (Three.js -> raw WebGL). It renders a single rounded-rect glass with refraction.
const FRAG = `
precision highp float;
varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uGlassCenter;
uniform vec2 uGlassSize;
uniform float uRadius;
uniform float uBezel;
uniform float uThickness;
uniform float uIOR;
uniform float uBlur;
uniform float uSpecular;
uniform float uTint;
uniform float uShadow;
uniform sampler2D uBgTex;
uniform float uBgAspect;

float sdRoundedRect(vec2 p, vec2 halfSize, float r) {
  vec2 q = abs(p) - halfSize + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

float surfaceHeight(float t) {
  float s = 1.0 - t;
  return pow(1.0 - s*s*s*s, 0.25);
}

vec3 sampleBg(vec2 screenUV) {
  float screenAspect = uResolution.x / uResolution.y;
  vec2 uv = screenUV;
  if (uBgAspect > screenAspect) {
    float s = screenAspect / uBgAspect;
    uv.x = uv.x * s + (1.0 - s) * 0.5;
  } else {
    float s = uBgAspect / screenAspect;
    uv.y = uv.y * s + (1.0 - s) * 0.5;
  }
  uv.y = 1.0 - uv.y;
  return texture2D(uBgTex, uv).rgb;
}

vec3 sampleBgBlurred(vec2 uv, float radius) {
  if (radius < 0.5) return sampleBg(uv);
  vec3 sum = vec3(0.0);
  vec2 px = 1.0 / uResolution;
  vec2 offsets[16];
  offsets[0]  = vec2(-0.94201, -0.39906);
  offsets[1]  = vec2( 0.94558, -0.76890);
  offsets[2]  = vec2(-0.09418, -0.92938);
  offsets[3]  = vec2( 0.34495,  0.29387);
  offsets[4]  = vec2(-0.91588, -0.45771);
  offsets[5]  = vec2(-0.81544,  0.48568);
  offsets[6]  = vec2(-0.38277, -0.56071);
  offsets[7]  = vec2(-0.12675,  0.84686);
  offsets[8]  = vec2( 0.89642,  0.41254);
  offsets[9]  = vec2( 0.18150, -0.30020);
  offsets[10] = vec2(-0.01445, -0.16001);
  offsets[11] = vec2( 0.59614,  0.71118);
  offsets[12] = vec2( 0.49742, -0.47280);
  offsets[13] = vec2( 0.80685,  0.04588);
  offsets[14] = vec2(-0.32490, -0.03965);
  offsets[15] = vec2(-0.60975,  0.06566);
  for (int i = 0; i < 16; i++) {
    sum += sampleBg(uv + offsets[i] * radius * px);
  }
  return sum / 16.0;
}

void main(){
  vec2 screenPx = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
  vec2 p = screenPx - uGlassCenter;
  vec2 halfSize = uGlassSize * 0.5;

  float sd = sdRoundedRect(p, halfSize, uRadius);

  if (sd > 0.0) {
    float shadowFalloff = exp(-sd * sd / 800.0);
    float shadowAlpha = uShadow * shadowFalloff * 0.6;
    gl_FragColor = vec4(0.0, 0.0, 0.0, shadowAlpha);
    return;
  }

  float distFromEdge = -sd;
  float bezel = min(uBezel, min(uRadius, min(halfSize.x, halfSize.y)) - 1.0);
  float t = clamp(distFromEdge / bezel, 0.0, 1.0);

  float h = surfaceHeight(t);
  float dt = 0.001;
  float h2 = surfaceHeight(min(t + dt, 1.0));
  float dh = (h2 - h) / dt;

  float slopeAngle = atan(dh * (uThickness / bezel));
  float sinR = sin(slopeAngle) / uIOR;
  sinR = clamp(sinR, -1.0, 1.0);
  float thetaR = asin(sinR);
  float displacement = h * uThickness * (tan(slopeAngle) - tan(thetaR));

  vec2 grad;
  float eps = 0.5;
  grad.x = sdRoundedRect(p + vec2(eps, 0.0), halfSize, uRadius) - sd;
  grad.y = sdRoundedRect(p + vec2(0.0, eps), halfSize, uRadius) - sd;
  grad = normalize(grad);

  vec2 offset = -grad * displacement / uResolution;

  vec2 screenUV = screenPx / uResolution;
  vec2 refractedUV = screenUV + offset;

  vec3 color = sampleBgBlurred(refractedUV, uBlur);

  vec2 lightDir = normalize(vec2(0.5, -0.7));
  float rimDot = abs(dot(grad, lightDir));
  float rimFalloff = 1.0 - smoothstep(0.0, bezel * 0.4, distFromEdge);
  float specHighlight = pow(rimDot * rimFalloff, 1.5);
  color += vec3(specHighlight * uSpecular);

  float innerShadow = 1.0 - smoothstep(0.0, bezel * 0.6, distFromEdge);
  color *= mix(1.0, 0.7, innerShadow * 0.3);

  float innerRim = smoothstep(0.0, 2.0, distFromEdge) * (1.0 - smoothstep(2.0, 5.0, distFromEdge));
  color += vec3(innerRim * 0.15 * uSpecular);

  color = mix(color, vec3(1.0), uTint);

  float alpha = smoothstep(0.0, 1.5, distFromEdge);
  gl_FragColor = vec4(color, alpha);
}
`;

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

function createTexture(gl){
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  // placeholder 1x1
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return tex;
}

export class LiquidGlassSideCard {
  /**
   * @param {HTMLElement} cardEl
   * @param {{ bgUrl?: string, dprCap?: number }} opts
   */
  constructor(cardEl, opts = {}){
    this.card = cardEl;
    this.opts = {
      bgUrl: opts.bgUrl || cardEl.getAttribute('data-liquid-glass-bg') || '/assets/liquid-glass/backgrounds/image2.jpg',
      dprCap: opts.dprCap ?? 2,
    };

    this.layer = null;
    this.canvas = null;

    this.gl = null;
    this.prog = null;
    this.buf = null;

    this.uResolution = null;
    this.uGlassCenter = null;
    this.uGlassSize = null;
    this.uRadius = null;
    this.uBezel = null;
    this.uThickness = null;
    this.uIOR = null;
    this.uBlur = null;
    this.uSpecular = null;
    this.uTint = null;
    this.uShadow = null;
    this.uBgTex = null;
    this.uBgAspect = null;

    this.bgTex = null;
    this.bgAspect = 1.5;

    this._ro = null;
    this._onScroll = null;
    this._onResize = null;

    this._scrolling = false;
    this._scrollStopTimer = null;
    this._raf = 0;

    this._reduce = prefersReducedMotion();
  }

  mount(){
    // Create layer/canvas
    const layer = document.createElement('div');
    layer.className = 'liquid-glass-layer';
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    layer.appendChild(canvas);
    this.card.insertBefore(layer, this.card.firstChild);

    this.layer = layer;
    this.canvas = canvas;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false });
    if(!gl) return;
    this.gl = gl;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = link(gl, vs, fs);
    this.prog = prog;

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

    // Uniforms
    this.uResolution = gl.getUniformLocation(prog, 'uResolution');
    this.uGlassCenter = gl.getUniformLocation(prog, 'uGlassCenter');
    this.uGlassSize = gl.getUniformLocation(prog, 'uGlassSize');
    this.uRadius = gl.getUniformLocation(prog, 'uRadius');
    this.uBezel = gl.getUniformLocation(prog, 'uBezel');
    this.uThickness = gl.getUniformLocation(prog, 'uThickness');
    this.uIOR = gl.getUniformLocation(prog, 'uIOR');
    this.uBlur = gl.getUniformLocation(prog, 'uBlur');
    this.uSpecular = gl.getUniformLocation(prog, 'uSpecular');
    this.uTint = gl.getUniformLocation(prog, 'uTint');
    this.uShadow = gl.getUniformLocation(prog, 'uShadow');
    this.uBgTex = gl.getUniformLocation(prog, 'uBgTex');
    this.uBgAspect = gl.getUniformLocation(prog, 'uBgAspect');

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Texture
    this.bgTex = createTexture(gl);
    this._loadBg(this.opts.bgUrl);

    this._bind();
    this._resize();
    this.render();
  }

  unmount(){
    this._unbind();
    if(this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
  }

  _loadBg(url){
    const gl = this.gl;
    if(!gl || !this.bgTex) return;

    const img = new Image();
    img.decoding = 'async';
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      this.bgAspect = img.naturalWidth / Math.max(1, img.naturalHeight);
      gl.bindTexture(gl.TEXTURE_2D, this.bgTex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      this.render();
    };
    img.src = url;
  }

  _bind(){
    this._ro = new ResizeObserver(() => {
      this._resize();
      this.render();
    });
    this._ro.observe(this.card);

    const onScroll = () => {
      this._resize();
      this.render();
      this._startScrollRAF();
    };
    this._onScroll = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      this._resize();
      this.render();
    };
    this._onResize = onResize;
    window.addEventListener('resize', onResize, { passive: true });
  }

  _unbind(){
    if(this._ro){ this._ro.disconnect(); this._ro = null; }
    if(this._onScroll) window.removeEventListener('scroll', this._onScroll);
    if(this._onResize) window.removeEventListener('resize', this._onResize);
  }

  _startScrollRAF(){
    if(this._reduce) return; // no extra work
    this._scrolling = true;
    if(this._scrollStopTimer) clearTimeout(this._scrollStopTimer);
    this._scrollStopTimer = setTimeout(() => {
      this._scrolling = false;
    }, 140);

    if(this._raf) return;

    const tick = () => {
      this._raf = 0;
      if(!this._scrolling) return;
      this._resize();
      this.render();
      this._raf = requestAnimationFrame(tick);
    };

    this._raf = requestAnimationFrame(tick);
  }

  _resize(){
    if(!this.canvas) return;
    const dpr = clamp(window.devicePixelRatio || 1, 1, this.opts.dprCap);
    const rect = this.card.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));

    if(this.canvas.width !== w || this.canvas.height !== h){
      this.canvas.width = w;
      this.canvas.height = h;
    }

    // keep CSS radius aligned
    this.card.style.borderRadius = GLASS_PRESET.radius + 'px';
  }

  render(){
    const gl = this.gl;
    if(!gl || !this.prog) return;

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.useProgram(this.prog);

    gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.uGlassCenter, this.canvas.width * 0.5, this.canvas.height * 0.5);
    gl.uniform2f(this.uGlassSize, this.canvas.width, this.canvas.height);

    gl.uniform1f(this.uRadius, GLASS_PRESET.radius);
    gl.uniform1f(this.uBezel, GLASS_PRESET.bezel);
    gl.uniform1f(this.uThickness, GLASS_PRESET.thickness);
    gl.uniform1f(this.uIOR, GLASS_PRESET.ior);
    gl.uniform1f(this.uBlur, GLASS_PRESET.blur);
    gl.uniform1f(this.uSpecular, GLASS_PRESET.specular);
    gl.uniform1f(this.uTint, GLASS_PRESET.tint);
    gl.uniform1f(this.uShadow, GLASS_PRESET.shadow);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.bgTex);
    gl.uniform1i(this.uBgTex, 0);
    gl.uniform1f(this.uBgAspect, this.bgAspect);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}
