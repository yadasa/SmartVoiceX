/* file: site/assets/landing-visuals.js */

window.SVXInitLandingVisuals = function SVXInitLandingVisuals(){
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeroStickySlider();

  buildWaveBars();
  buildActivityBars();
  buildUptimeBars();

  if (!reduceMotion) {
    startWaveLoop();
    startChatLoop();
    animateCostCards();
    animateActivityBars();
    animateUptimeBars();
    animateActivityCount(847);
  } else {
    revealAllChatRows();
    setCostWidths();
    setStaticActivityBars();
    setStaticUptimeBars();
  }

  function buildWaveBars(){
    const wrap = document.getElementById('svxWaveBars');
    if (!wrap || wrap.children.length) return;
    for (let i = 0; i < 32; i++) {
      const bar = document.createElement('span');
      bar.className = 'svx-wave-bar';
      bar.style.height = (8 + (i % 6) * 4) + 'px';
      wrap.appendChild(bar);
    }
  }

  function startWaveLoop(){
    const bars = Array.from(document.querySelectorAll('.svx-wave-bar'));
    if (!bars.length) return;
    setInterval(() => {
      bars.forEach((bar, index) => {
        const seed = Math.abs(Math.sin((Date.now() / 180) + index * 1.3));
        const height = 8 + Math.round(seed * 40);
        bar.style.height = height + 'px';
      });
    }, 140);
  }

  function startChatLoop(){
    const rows = Array.from(document.querySelectorAll('#svxPreviewChat .svx-chat-row'));
    if (!rows.length) return;

    const play = () => {
      rows.forEach(row => row.classList.remove('is-visible'));
      rows.forEach((row, index) => {
        setTimeout(() => row.classList.add('is-visible'), 450 * (index + 1));
      });
    };

    play();
    setInterval(play, 5400);
  }

  function revealAllChatRows(){
    document.querySelectorAll('#svxPreviewChat .svx-chat-row')
      .forEach(row => row.classList.add('is-visible'));
  }

  function animateCostCards(){
    const rows = Array.from(document.querySelectorAll('.svx-cost-row'));
    if (!rows.length) return;
    if (!('IntersectionObserver' in window)) return setCostWidths();

    const rafByFill = new WeakMap();

    const resetRow = (row) => {
      const fill = row.querySelector('.svx-cost-fill');
      if (!fill) return;
      const rafId = rafByFill.get(fill);
      if (rafId) cancelAnimationFrame(rafId);
      rafByFill.delete(fill);
      fill.style.width = '0%';
      if (fill.classList.contains('svx-cost-fill--staff')) {
        fill.style.background = 'rgb(56 189 127 / 0.55)';
      }
    };

    const animateRow = (row) => {
      const fill = row.querySelector('.svx-cost-fill');
      if (!fill) return;

      const target = Number(row.getAttribute('data-width') || '0');
      if (!isFinite(target) || target <= 0) return;

      // Restart from 0 every time it enters view.
      resetRow(row);

      const isStaff = fill.classList.contains('svx-cost-fill--staff');
      const duration = 1400; // slower than before
      const t0 = performance.now();

      const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const w = target * eased;
        fill.style.width = w.toFixed(2) + '%';

        if (isStaff) {
          // Whole bar fades green -> yellow -> red as it approaches 100%.
          const frac = eased;
          const a = 0.55;
          const GREEN = [56, 189, 127];
          const YELLOW = [250, 204, 21];
          const RED = [239, 68, 68];

          const lerp = (x, y, t) => x + (y - x) * t;
          const mix = (c1, c2, t) => [
            Math.round(lerp(c1[0], c2[0], t)),
            Math.round(lerp(c1[1], c2[1], t)),
            Math.round(lerp(c1[2], c2[2], t)),
          ];

          let rgb;
          if (frac <= 0.6) {
            rgb = mix(GREEN, YELLOW, frac / 0.6);
          } else {
            rgb = mix(YELLOW, RED, (frac - 0.6) / 0.4);
          }
          fill.style.background = `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]} / ${a})`;
        }

        if (p < 1) {
          rafByFill.set(fill, requestAnimationFrame(step));
        } else {
          rafByFill.delete(fill);
        }
      };

      rafByFill.set(fill, requestAnimationFrame(step));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const row = entry.target;
        if (entry.isIntersecting) animateRow(row);
        else resetRow(row);
      });
    }, { threshold: 0.35 });

    rows.forEach((row) => observer.observe(row));
  }

  function setCostWidths(){
    document.querySelectorAll('.svx-cost-row').forEach(row => {
      const width = row.getAttribute('data-width') || '0';
      const fill = row.querySelector('.svx-cost-fill');
      if (fill) fill.style.width = width + '%';
    });
  }

  function buildActivityBars(){
    const wrap = document.getElementById('svxActivityBars');
    if (!wrap || wrap.children.length) return;
    const values = [6, 16, 30, 56, 84, 130, 156, 170, 144, 116, 90, 60, 36, 16, 8];
    const max = Math.max(...values);
    values.forEach(v => {
      const bar = document.createElement('span');
      bar.className = 'svx-activity-bar';
      bar.dataset.target = String((v / max) * 100);
      wrap.appendChild(bar);
    });
  }

  function animateActivityBars(){
    const bars = document.querySelectorAll('.svx-activity-bar');
    if (!bars.length) return;
    if (!('IntersectionObserver' in window)) return setStaticActivityBars();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        bars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.height = (bar.dataset.target || '0') + '%';
          }, index * 40);
        });
        observer.disconnect();
      });
    }, { threshold: 0.35 });

    observer.observe(document.getElementById('svxActivityBars'));
  }

  function setStaticActivityBars(){
    document.querySelectorAll('.svx-activity-bar').forEach(bar => {
      bar.style.height = (bar.dataset.target || '0') + '%';
    });
  }

  function animateActivityCount(target){
    const node = document.getElementById('svxActivityCount');
    if (!node) return;
    let start = 0;
    const startTime = performance.now();
    const duration = 900;
    const tick = now => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = String(Math.round(start + (target - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function buildUptimeBars(){
    const wrap = document.getElementById('svxUptimeStrip');
    if (!wrap || wrap.children.length) return;
    for (let i = 0; i < 30; i++) {
      const bar = document.createElement('span');
      bar.className = 'svx-uptime-bar';
      if (i === 20) bar.classList.add('is-incident');
      wrap.appendChild(bar);
    }
  }

  function animateUptimeBars(){
    const bars = document.querySelectorAll('.svx-uptime-bar');
    if (!bars.length) return;
    bars.forEach((bar, index) => {
      setTimeout(() => { bar.style.transform = 'scaleY(1)'; }, index * 25);
    });
  }

  function setStaticUptimeBars(){
    document.querySelectorAll('.svx-uptime-bar').forEach(bar => {
      bar.style.transform = 'scaleY(1)';
    });
  }

  function initHeroStickySlider(){
    const root = document.querySelector('[data-svx-side-slider]');
    if (!root) return;
    const track = root.querySelector('.svx-side-track');
    if (!track) return;

    const viewport = root.querySelector('.svx-side-viewport');
    const pages = Array.from(root.querySelectorAll('.svx-side-page'));

    const btnPrev = root.querySelector('[data-svx-side-prev]');
    const btnNext = root.querySelector('[data-svx-side-next]');

    let index = 0;
    let timer = null;
    let paused = false;

    const syncHeight = () => {
      if (!viewport) return;
      const page = pages[index];
      if (!page) return;
      // Height transition is handled via CSS on the viewport.
      viewport.style.height = page.offsetHeight + 'px';
    };

    const apply = () => {
      track.style.transform = `translateX(${-50 * index}%)`;
      syncHeight();
    };

    const go = (next) => {
      index = ((next % 2) + 2) % 2;
      apply();
    };

    const start = () => {
      if (reduceMotion) return;
      if (timer) return;
      timer = setInterval(() => {
        if (paused) return;
        go(index + 1);
      }, 3000);
    };

    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    root.addEventListener('mouseenter', () => {
      paused = true;
      stop();
    });
    root.addEventListener('mouseleave', () => {
      paused = false;
      start();
    });

    btnPrev?.addEventListener('click', () => {
      go(index - 1);
    });
    btnNext?.addEventListener('click', () => {
      go(index + 1);
    });

    // Keep height correct on resize.
    let resizeT = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => syncHeight(), 80);
    });

    apply();
    start();
  }
};
