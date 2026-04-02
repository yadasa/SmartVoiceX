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
      vec2 c1 = vec2(0.18, 0.20);
      vec2 c2 = vec2(0.82, 0.22);
      vec2 c3 = vec2(0.20, 0.86);
      vec2 c4 = vec2(0.84, 0.84);

      // Time drift (more free movement)
      c1 += vec2(0.08*sin(t*0.31), 0.08*cos(t*0.27));
      c2 += vec2(0.10*cos(t*0.23), 0.07*sin(t*0.29));
      c3 += vec2(0.07*cos(t*0.19), 0.10*sin(t*0.21));
      c4 += vec2(0.08*sin(t*0.17), 0.08*cos(t*0.25));

      // Pointer influence (similar to previous per-blob factors)
      c1 += u_ptr * vec2( 1.00, 0.65);
      c2 += u_ptr * vec2(-0.85, 0.95);
      c3 += u_ptr * vec2( 0.55,-1.05);
      c4 += u_ptr * vec2(-0.70,-0.60);

      // follower blob: tracks average center
      vec2 c5 = (c1 + c2 + c3 + c4) * 0.25;
      c5 += vec2(0.06*sin(t*0.11), 0.05*cos(t*0.15));

      float b = 0.0;
      // Slightly shrink radii in sharp mode so overlaps are easier to see.
      float k = mix(1.0, 0.72, clamp(u_sharp, 0.0, 1.0));
      b += 1.15 * blob(uv, c1, 0.32 * k, aspect);
      b += 1.00 * blob(uv, c2, 0.38 * k, aspect);
      b += 0.95 * blob(uv, c3, 0.46 * k, aspect);
      b += 0.90 * blob(uv, c4, 0.42 * k, aspect);
      b += 0.70 * blob(uv, c5, 0.50 * k, aspect);

      // Color palette
      vec3 base = vec3(0.0, 0.0, 0.0);
      vec3 purple = vec3(0.38, 0.10, 0.85);
      vec3 blue   = vec3(0.25, 0.48, 1.00);

      float v = clamp(b, 0.0, 2.5);
      float glow = smoothstep(0.15, 1.9, v);
      float soft = smoothstep(0.05, 1.20, v);
      soft = sharpStep(soft);
      glow = sharpStep(glow);

      float mixAB = 0.5 + 0.5*sin(t*0.22 + (uv.x-0.5)*1.8 - (uv.y-0.5)*1.5);
      vec3 ink = mix(purple, blue, clamp(mixAB, 0.0, 1.0));

      vec3 col = base + ink * soft * 0.88;
      col += ink * glow * 0.30;

      float vign = smoothstep(1.12, 0.18, length(uv - 0.5));
      col *= 0.78 + 0.22 * vign;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // Composites to the screen and applies the liquid-glass effect inside a rounded rect.
  const COMPOSE_FRAG = `
    precision highp float;
    varying vec2 v_uv;

    uniform vec2 u_resolution;
    uniform sampler2D u_bgTex;

    // glass rect in *pixel* space, top-left origin (matching getBoundingClientRect * dpr)
    uniform vec4 u_glassRect; // x,y,w,h
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

    void main(){
      // v_uv: 0..1 bottom-left? (we used a_pos mapping; in WebGL, texture coords are bottom-left in our own convention)
      // We'll use the same uv space for sampling the bg texture (rendered with same v_uv).
      vec2 uv = v_uv;
      vec3 col = bg(uv);

      // Convert this fragment to pixel coords with top-left origin for rect math.
      vec2 fragPxTL = vec2(uv.x * u_resolution.x, (1.0 - uv.y) * u_resolution.y);

      // Glass rect
      vec2 rectPos = u_glassRect.xy;
      vec2 rectSize = u_glassRect.zw;
      vec2 rectCenter = rectPos + rectSize * 0.5;

      vec2 p = fragPxTL - rectCenter;
      vec2 halfSize = rectSize * 0.5;

      float r = min(u_radius, min(halfSize.x, halfSize.y) - 1.0);
      float sd = sdRoundedRect(p, halfSize, r);

      // Outside: apply a soft drop shadow only
      if (sd > 0.0) {
        float shadowFalloff = exp(-sd * sd / 800.0);
        float shadow = u_shadow * shadowFalloff * 0.55;
        col *= (1.0 - shadow);
        gl_FragColor = vec4(col, 1.0);
        return;
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

      // Approx gradient from SDF
      vec2 grad;
      float eps = 0.5;
      grad.x = sdRoundedRect(p + vec2(eps, 0.0), halfSize, r) - sd;
      grad.y = sdRoundedRect(p + vec2(0.0, eps), halfSize, r) - sd;
      grad = normalize(grad);

      // convert pixel offset -> uv offset
      vec2 offset = -grad * displacement / u_resolution;

      vec2 refrUV = uv + vec2(offset.x, -offset.y); // y flip (uv uses bottom-left, grad math used top-left)

      vec3 gcol = bgBlur(refrUV, u_blur);

      // Specular highlight
      vec2 lightDir = normalize(vec2(0.5, -0.7));
      float rimDot = abs(dot(grad, lightDir));
      float rimFalloff = 1.0 - smoothstep(0.0, bezel * 0.4, distFromEdge);
      float spec = pow(rimDot * rimFalloff, 1.5);
      gcol += vec3(spec * u_specular);

      // Inner shading
      float innerShadow = 1.0 - smoothstep(0.0, bezel * 0.6, distFromEdge);
      gcol *= mix(1.0, 0.72, innerShadow * 0.26);

      // Very light tint toward white
      gcol = mix(gcol, vec3(1.0), u_tint);

      // Mix with underlying background to keep it believable.
      float alpha = smoothstep(0.0, 1.5, distFromEdge) * 0.62;
      col = mix(col, gcol, alpha);

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
      rectPx: { x: -99999, y: -99999, w: 0, h: 0 },
      radiusPx: GLASS_PRESET.radius,
      bezelPx: GLASS_PRESET.bezel,
      thicknessPx: GLASS_PRESET.thickness,
    };

    function updateGlassRect(){
      const el = document.querySelector('.side-card[data-liquid-glass]');
      if(!el){
        glass.rectPx = { x: -99999, y: -99999, w: 0, h: 0 };
        return;
      }
      const r = el.getBoundingClientRect();
      glass.rectPx = {
        x: r.left * dpr,
        y: r.top * dpr,
        w: r.width * dpr,
        h: r.height * dpr,
      };
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

      updateGlassRect();
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
          updateGlassRect();
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
    const sideCard = document.querySelector('.side-card[data-liquid-glass]');
    if(sideCard && 'ResizeObserver' in window){
      const ro = new ResizeObserver(() => requestRectUpdate());
      ro.observe(sideCard);
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
      rect: gl.getUniformLocation(compProg, 'u_glassRect'),
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
        updateGlassRect();
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

      const r = glass.rectPx;
      gl.uniform4f(u_c.rect, r.x, r.y, r.w, r.h);

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
