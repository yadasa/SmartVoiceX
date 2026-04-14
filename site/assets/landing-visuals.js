/* file: site/assets/landing-visuals.js */

window.SVXInitLandingVisuals = function SVXInitLandingVisuals(){
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    const rows = document.querySelectorAll('.svx-cost-row');
    if (!('IntersectionObserver' in window)) return setCostWidths();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const row = entry.target;
        const width = row.getAttribute('data-width') || '0';
        const fill = row.querySelector('.svx-cost-fill');
        if (fill) fill.style.width = width + '%';
        observer.unobserve(row);
      });
    }, { threshold: 0.35 });

    rows.forEach(row => observer.observe(row));
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
};
