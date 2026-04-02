// SmartVoiceX — WebGL background + liquid-glass side-card
// Single full-screen canvas. No external deps.

(() => {
  const GLASS_PRESET = {
    radius: 21,
    thickness: 60,
    bezel: 60,
    ior: 3.0,
    blur: 1.5,
    specular: 0.30,
    tint: 0.08,
    shadow: 0.25,
  };

  function prefersReducedMotion(){
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  const QUAD_VERT = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main(){
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  // Renders the animated blue/purple blob background into an offscreen texture.
  const BG_FRAG = `
    precision highp float;
    varying vec2 v_uv;
    uniform vec2 u_resolution;
    uniform float u_time;
    // pointer offset in UV units (roughly +/-0.15)
    uniform vec2 u_ptr;
    // 0 = normal (soft/blurred blobs), 1 = sharper blobs for refraction debugging
    uniform float u_sharp;

    float blob(vec2 uv, vec2 c, float r, float aspect){
      vec2 d = (uv - c) * vec2(aspect, 1.0);
      float dd = dot(d,d);
      return exp(-dd / (r*r));
    }

    float sharpStep(float x){
      // When u_sharp=1, increase edge contrast.
      return mix(x, pow(clamp(x, 0.0, 1.0), 2.25), clamp(u_sharp, 0.0, 1.0));
    }

    void main(){
      vec2 uv = v_uv;
      float aspect = u_resolution.x / u_resolution.y;
      float t = u_time;

      // Base positions (roughly matching the old CSS layout corners)
      // Spread out a bit more so refraction is easier to read.
      vec2 c1 = vec2(0.12, 0.16);
      vec2 c2 = vec2(0.88, 0.18);
      vec2 c3 = vec2(0.14, 0.90);
      vec2 c4 = vec2(0.90, 0.88);

      // Time drift (more free movement)
      c1 += vec2(0.08*sin(t*0.31), 0.08*cos(t*0.27));
      c2 += vec2(0.10*cos(t*0.23), 0.07*sin(t*0.29));
      c3 += vec2(0.07*cos(t*0.19), 0.10*sin(t*0.21));
      c4 += vec2(0.08*sin(t*0.17), 0.08*cos(t*0.25));

      // Pointer influence (similar to previous per-blob factors)
      c1 += u_ptr * vec2( 1.10, 0.72);
      c2 += u_ptr * vec2(-0.95, 1.05);
      c3 += u_ptr * vec2( 0.62,-1.12);
      c4 += u_ptr * vec2(-0.78,-0.66);

      // follower blob: tracks average center
      vec2 c5 = (c1 + c2 + c3 + c4) * 0.25;
      c5 += vec2(0.06*sin(t*0.11), 0.05*cos(t*0.15));

      // Slightly shrink radii overall so more black peeks through; shrink further in sharp mode.
      float k = mix(0.88, 0.72, clamp(u_sharp, 0.0, 1.0));

      float w1 = 1.15 * blob(uv, c1, 0.32 * k, aspect);
      float w2 = 1.00 * blob(uv, c2, 0.38 * k, aspect);
      float w3 = 0.95 * blob(uv, c3, 0.46 * k, aspect);
      float w4 = 0.90 * blob(uv, c4, 0.42 * k, aspect);
      float w5 = 0.70 * blob(uv, c5, 0.50 * k, aspect);

      float b = w1 + w2 + w3 + w4 + w5;

      // Color palette
      vec3 base = vec3(0.0, 0.0, 0.0);
      vec3 purple = vec3(0.38, 0.10, 0.85);
      vec3 blue   = vec3(0.25, 0.48, 1.00);

      // Per-blob tint phase (independent of movement): sinusoidal, eased.
      // Black is least frequent via a high power on a separate oscillator.
      float tcol = t;
      float s1 = 0.5 + 0.5*sin(tcol*0.37 + 1.1);
      float s2 = 0.5 + 0.5*sin(tcol*0.33 + 2.7);
      float s3 = 0.5 + 0.5*sin(tcol*0.29 + 4.2);
      float s4 = 0.5 + 0.5*sin(tcol*0.41 + 0.4);
      float s5 = 0.5 + 0.5*sin(tcol*0.26 + 5.3);

      // quadratic ease in/out
      float e1 = mix(2.0*s1*s1, 1.0 - 2.0*(1.0-s1)*(1.0-s1), step(0.5, s1));
      float e2 = mix(2.0*s2*s2, 1.0 - 2.0*(1.0-s2)*(1.0-s2), step(0.5, s2));
      float e3 = mix(2.0*s3*s3, 1.0 - 2.0*(1.0-s3)*(1.0-s3), step(0.5, s3));
      float e4 = mix(2.0*s4*s4, 1.0 - 2.0*(1.0-s4)*(1.0-s4), step(0.5, s4));
      float e5 = mix(2.0*s5*s5, 1.0 - 2.0*(1.0-s5)*(1.0-s5), step(0.5, s5));

      vec3 c1c = mix(purple, blue, clamp(e1, 0.0, 1.0));
      vec3 c2c = mix(purple, blue, clamp(e2, 0.0, 1.0));
      vec3 c3c = mix(purple, blue, clamp(e3, 0.0, 1.0));
      vec3 c4c = mix(purple, blue, clamp(e4, 0.0, 1.0));
      vec3 c5c = mix(purple, blue, clamp(e5, 0.0, 1.0));

      float bk1 = pow(0.5 + 0.5*sin(tcol*0.21 + 0.8), 7.0);
      float bk2 = pow(0.5 + 0.5*sin(tcol*0.19 + 3.1), 7.0);
      float bk3 = pow(0.5 + 0.5*sin(tcol*0.17 + 5.2), 7.0);
      float bk4 = pow(0.5 + 0.5*sin(tcol*0.23 + 1.9), 7.0);
      float bk5 = pow(0.5 + 0.5*sin(tcol*0.16 + 4.6), 7.0);

      c1c = mix(c1c, vec3(0.0), bk1 * 0.55);
      c2c = mix(c2c, vec3(0.0), bk2 * 0.55);
      c3c = mix(c3c, vec3(0.0), bk3 * 0.55);
      c4c = mix(c4c, vec3(0.0), bk4 * 0.55);
      c5c = mix(c5c, vec3(0.0), bk5 * 0.55);

      vec3 ink = (w1*c1c + w2*c2c + w3*c3c + w4*c4c + w5*c5c) / max(0.0001, b);

      float v = clamp(b, 0.0, 2.5);
      float glow = smoothstep(0.15, 1.9, v);
      float soft = smoothstep(0.05, 1.20, v);
      soft = sharpStep(soft);
      glow = sharpStep(glow);

      vec3 col = base + ink * soft * 0.88;
      col += ink * glow * 0.30;

      float vign = smoothstep(1.12, 0.18, length(uv - 0.5));
      col *= 0.78 + 0.22 * vign;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // Composites to the screen and applies the liquid-glass effect inside rounded rects.
  const COMPOSE_FRAG = `
    precision highp float;
    varying vec2 v_uv;

    uniform vec2 u_resolution;
    uniform sampler2D u_bgTex;

    // Multiple glass rects in *pixel* space, top-left origin (matching getBoundingClientRect * dpr)
    const int MAX_RECTS = 32;
    uniform int u_glassCount;
    uniform vec4 u_glassRects[MAX_RECTS]; // x,y,w,h

    uniform float u_radius;
    uniform float u_bezel;
    uniform float u_thickness;
    uniform float u_ior;
    uniform float u_blur;
    uniform float u_specular;
    uniform float u_tint;
    uniform float u_shadow;

    float sdRoundedRect(vec2 p, vec2 halfSize, float r) {
      vec2 q = abs(p) - halfSize + r;
      return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
    }

    float surfaceHeight(float t) {
      float s = 1.0 - t;
      return pow(1.0 - s*s*s*s, 0.25);
    }

    vec3 bg(vec2 uv){
      return texture2D(u_bgTex, uv).rgb;
    }

    vec3 bgBlur(vec2 uv, float radiusPx){
      if (radiusPx < 0.5) return bg(uv);
      vec2 px = 1.0 / u_resolution;
      vec3 sum = vec3(0.0);
      // 12-tap (cheaper than 16); still decent for subtle blur
      vec2 o0 = vec2(-0.94201, -0.39906);
      vec2 o1 = vec2( 0.94558, -0.76890);
      vec2 o2 = vec2(-0.09418, -0.92938);
      vec2 o3 = vec2( 0.34495,  0.29387);
      vec2 o4 = vec2(-0.91588, -0.45771);
      vec2 o5 = vec2(-0.81544,  0.48568);
      vec2 o6 = vec2(-0.38277, -0.56071);
      vec2 o7 = vec2(-0.12675,  0.84686);
      vec2 o8 = vec2( 0.89642,  0.41254);
      vec2 o9 = vec2( 0.18150, -0.30020);
      vec2 o10 = vec2( 0.59614,  0.71118);
      vec2 o11 = vec2( 0.49742, -0.47280);
      sum += bg(uv + o0*radiusPx*px);
      sum += bg(uv + o1*radiusPx*px);
      sum += bg(uv + o2*radiusPx*px);
      sum += bg(uv + o3*radiusPx*px);
      sum += bg(uv + o4*radiusPx*px);
      sum += bg(uv + o5*radiusPx*px);
      sum += bg(uv + o6*radiusPx*px);
      sum += bg(uv + o7*radiusPx*px);
      sum += bg(uv + o8*radiusPx*px);
      sum += bg(uv + o9*radiusPx*px);
      sum += bg(uv + o10*radiusPx*px);
      sum += bg(uv + o11*radiusPx*px);
      return sum / 12.0;
    }

    vec3 applyGlass(vec3 col, vec2 uv, vec2 fragPxTL, vec4 rect){
      vec2 rectPos = rect.xy;
      vec2 rectSize = rect.zw;
      vec2 rectCenter = rectPos + rectSize * 0.5;

      vec2 p = fragPxTL - rectCenter;
      vec2 halfSize = rectSize * 0.5;
      if(halfSize.x < 1.0 || halfSize.y < 1.0) return col;

      float r = min(u_radius, min(halfSize.x, halfSize.y) - 1.0);
      float sd = sdRoundedRect(p, halfSize, r);

      // Outside: apply a soft shadow only (local)
      if (sd > 0.0) {
        // only shadow near the card
        if(sd < 90.0){
          float shadowFalloff = exp(-sd * sd / 800.0);
          float shadow = u_shadow * shadowFalloff * 0.55;
          col *= (1.0 - shadow);
        }
        return col;
      }

      float distFromEdge = -sd;
      float bezel = min(u_bezel, min(r, min(halfSize.x, halfSize.y)) - 1.0);
      float t = clamp(distFromEdge / bezel, 0.0, 1.0);

      float h = surfaceHeight(t);
      float dt = 0.001;
      float h2 = surfaceHeight(min(t + dt, 1.0));
      float dh = (h2 - h) / dt;

      float slopeAngle = atan(dh * (u_thickness / bezel));
      float sinR = sin(slopeAngle) / u_ior;
      sinR = clamp(sinR, -1.0, 1.0);
      float thetaR = asin(sinR);
      float displacement = h * u_thickness * (tan(slopeAngle) - tan(thetaR));

      vec2 grad;
      float eps = 0.5;
      grad.x = sdRoundedRect(p + vec2(eps, 0.0), halfSize, r) - sd;
      grad.y = sdRoundedRect(p + vec2(0.0, eps), halfSize, r) - sd;
      grad = normalize(grad);

      vec2 offset = -grad * displacement / u_resolution;
      vec2 refrUV = uv + vec2(offset.x, -offset.y);

      vec3 gcol = bgBlur(refrUV, u_blur);

      vec2 lightDir = normalize(vec2(0.5, -0.7));
      float rimDot = abs(dot(grad, lightDir));
      float rimFalloff = 1.0 - smoothstep(0.0, bezel * 0.4, distFromEdge);
      float spec = pow(rimDot * rimFalloff, 1.5);
      gcol += vec3(spec * u_specular);

      float innerShadow = 1.0 - smoothstep(0.0, bezel * 0.6, distFromEdge);
      gcol *= mix(1.0, 0.72, innerShadow * 0.26);

      gcol = mix(gcol, vec3(1.0), u_tint);

      float alpha = smoothstep(0.0, 1.5, distFromEdge) * 0.62;
      return mix(col, gcol, alpha);
    }

    void main(){
      vec2 uv = v_uv;
      vec3 col = bg(uv);

      vec2 fragPxTL = vec2(uv.x * u_resolution.x, (1.0 - uv.y) * u_resolution.y);

      for(int i = 0; i < MAX_RECTS; i++){
        if(i >= u_glassCount) break;
        col = applyGlass(col, uv, fragPxTL, u_glassRects[i]);
      }

      gl_FragColor = vec4(col, 1.0);
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

  function link(gl, vsSrc, fsSrc){
    const vs = compile(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if(!gl.getProgramParameter(p, gl.LINK_STATUS)){
      const err = gl.getProgramInfoLog(p);
      gl.deleteProgram(p);
      throw new Error(err || 'Program link failed');
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return p;
  }

  function createTex(gl, w, h){
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    return tex;
  }

  function createFbo(gl, tex){
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return fbo;
  }

  function init(){
    const canvas = document.createElement('canvas');
    canvas.id = 'svx-webgl-bg';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.prepend(canvas);

    const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false });
    if(!gl) return;

    const bgProg = link(gl, QUAD_VERT, BG_FRAG);
    const compProg = link(gl, QUAD_VERT, COMPOSE_FRAG);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    function bindQuad(prog){
      gl.useProgram(prog);
      const loc = gl.getAttribLocation(prog, 'a_pos');
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    let dpr = 1;
    let w = 1, h = 1;
    let bgTex = null;
    let bgFbo = null;

    const glass = {
      // rect list in px TL coordinates, packed for uniform upload (x,y,w,h per rect)
      rectsPx: new Float32Array(32 * 4),
      count: 0,
    };

    function updateGlassRects(){
      const nodes = Array.from(document.querySelectorAll('.card'));
      // Cap to shader MAX_RECTS (32)
      const max = Math.min(32, nodes.length);
      glass.count = max;
      for(let i = 0; i < max; i++){
        const r = nodes[i].getBoundingClientRect();
        const j = i * 4;
        glass.rectsPx[j + 0] = r.left * dpr;
        glass.rectsPx[j + 1] = r.top * dpr;
        glass.rectsPx[j + 2] = r.width * dpr;
        glass.rectsPx[j + 3] = r.height * dpr;
      }
      // if fewer than 32, zero the rest (keeps things deterministic)
      for(let i = max; i < 32; i++){
        const j = i * 4;
        glass.rectsPx[j + 0] = -99999;
        glass.rectsPx[j + 1] = -99999;
        glass.rectsPx[j + 2] = 0;
        glass.rectsPx[j + 3] = 0;
      }
    }

    function resize(){
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = Math.max(1, Math.floor(window.innerWidth * dpr));
      h = Math.max(1, Math.floor(window.innerHeight * dpr));
      canvas.width = w;
      canvas.height = h;

      gl.viewport(0, 0, w, h);

      if(bgTex) gl.deleteTexture(bgTex);
      if(bgFbo) gl.deleteFramebuffer(bgFbo);
      bgTex = createTex(gl, w, h);
      bgFbo = createFbo(gl, bgTex);

      updateGlassRects();
      draw(0);
    }

    // Throttled scroll/resize updates.
    let needsRect = true;
    let ticking = false;
    function requestRectUpdate(){
      needsRect = true;
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if(needsRect){
          needsRect = false;
          updateGlassRects();
        }
      });
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', requestRectUpdate, { passive: true });

    // Pointer influence (mouse + touch) similar to the old CSS blob system.
    let tx = 0, ty = 0;
    let cx = 0, cy = 0;
    function setTarget(x, y){
      const nx = (x / window.innerWidth) - 0.5;
      const ny = (y / window.innerHeight) - 0.5;
      tx = Math.max(-140, Math.min(140, nx * 280));
      ty = Math.max(-140, Math.min(140, ny * 280));
    }
    window.addEventListener('pointermove', (e) => setTarget(e.clientX, e.clientY), { passive: true });
    window.addEventListener('touchmove', (e) => {
      const t = e.touches && e.touches[0];
      if (t) setTarget(t.clientX, t.clientY);
    }, { passive: true });

    // Binary toggle: make blobs sharper (easier to see refraction).
    // - URL param: ?svxSharp=1
    // - localStorage: svx_webgl_sharp_bg = "1"
    const params = new URLSearchParams(location.search);
    const sharpBg = (params.get('svxSharp') === '1') || (localStorage.getItem('svx_webgl_sharp_bg') === '1');

    // Observe layout shifts of the side-card.
    // Observe layout shifts of cards.
    const cards = Array.from(document.querySelectorAll('.card'));
    if(cards.length && 'ResizeObserver' in window){
      const ro = new ResizeObserver(() => requestRectUpdate());
      cards.forEach(c => ro.observe(c));
    }

    // Render
    const u_bg = {
      prog: bgProg,
      res: gl.getUniformLocation(bgProg, 'u_resolution'),
      time: gl.getUniformLocation(bgProg, 'u_time'),
      ptr: gl.getUniformLocation(bgProg, 'u_ptr'),
      sharp: gl.getUniformLocation(bgProg, 'u_sharp'),
    };

    const u_c = {
      prog: compProg,
      res: gl.getUniformLocation(compProg, 'u_resolution'),
      bgTex: gl.getUniformLocation(compProg, 'u_bgTex'),
      count: gl.getUniformLocation(compProg, 'u_glassCount'),
      rects: gl.getUniformLocation(compProg, 'u_glassRects[0]'),
      radius: gl.getUniformLocation(compProg, 'u_radius'),
      bezel: gl.getUniformLocation(compProg, 'u_bezel'),
      thickness: gl.getUniformLocation(compProg, 'u_thickness'),
      ior: gl.getUniformLocation(compProg, 'u_ior'),
      blur: gl.getUniformLocation(compProg, 'u_blur'),
      specular: gl.getUniformLocation(compProg, 'u_specular'),
      tint: gl.getUniformLocation(compProg, 'u_tint'),
      shadow: gl.getUniformLocation(compProg, 'u_shadow'),
    };

    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);

    function draw(timeMs){
      const t = timeMs * 0.001;

      if(needsRect){
        needsRect = false;
        updateGlassRects();
      }

      // 1) Background pass into offscreen texture
      gl.bindFramebuffer(gl.FRAMEBUFFER, bgFbo);
      gl.viewport(0, 0, w, h);
      bindQuad(bgProg);
      gl.uniform2f(u_bg.res, w, h);
      gl.uniform1f(u_bg.time, t);
      gl.uniform1f(u_bg.sharp, sharpBg ? 1.0 : 0.0);

      // pointer smoothing; convert px -> uv offset (~ +/-0.15)
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      gl.uniform2f(u_bg.ptr, (cx / w), (cy / h));

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // 2) Composite pass to screen with liquid-glass applied
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, w, h);
      bindQuad(compProg);
      gl.uniform2f(u_c.res, w, h);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, bgTex);
      gl.uniform1i(u_c.bgTex, 0);

      gl.uniform1i(u_c.count, glass.count);
      gl.uniform4fv(u_c.rects, glass.rectsPx);

      gl.uniform1f(u_c.radius, GLASS_PRESET.radius * dpr);
      gl.uniform1f(u_c.bezel, GLASS_PRESET.bezel * dpr);
      gl.uniform1f(u_c.thickness, GLASS_PRESET.thickness * dpr);
      gl.uniform1f(u_c.ior, GLASS_PRESET.ior);
      gl.uniform1f(u_c.blur, GLASS_PRESET.blur * dpr);
      gl.uniform1f(u_c.specular, GLASS_PRESET.specular);
      gl.uniform1f(u_c.tint, GLASS_PRESET.tint);
      gl.uniform1f(u_c.shadow, GLASS_PRESET.shadow);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    let raf = 0;
    function start(){
      const reduce = prefersReducedMotion();
      if(reduce){
        cancelAnimationFrame(raf);
        raf = 0;
        draw(0);
        return;
      }
      const loop = (ms) => {
        draw(ms);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    // React to motion preference changes
    if(window.matchMedia){
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const onChange = () => start();
      try{ mq.addEventListener('change', onChange); }
      catch{ mq.addListener(onChange); }
    }

    resize();
    start();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
