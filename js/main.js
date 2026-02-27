// PhotoAgent project page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Related works dropdown: click to toggle (mobile) and close on outside click
(function () {
  const trigger = document.querySelector('.nav-related-trigger');
  const dropdown = document.querySelector('.nav-related-dropdown');
  const block = document.querySelector('.nav-related');
  if (!trigger || !dropdown || !block) return;
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = dropdown.hasAttribute('data-open');
    if (open) {
      dropdown.removeAttribute('data-open');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      dropdown.setAttribute('data-open', '');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
  document.addEventListener('click', function () {
    dropdown.removeAttribute('data-open');
    trigger.setAttribute('aria-expanded', 'false');
  });
  block.addEventListener('click', function (e) {
    e.stopPropagation();
  });
})();

// Before / After comparison slider
(function () {
  const wrap = document.querySelector('.compare-slider-wrap');
  const slider = wrap && wrap.querySelector('.compare-slider');
  const before = wrap && wrap.querySelector('.compare-before');
  const divider = wrap && wrap.querySelector('.compare-divider');
  const thumbs = document.querySelectorAll('.compare-thumb');
  if (!wrap || !slider || !before) return;

  function update(val) {
    const pct = val + '%';
    before.style.clipPath = 'inset(0 ' + (100 - val) + '% 0 0)';
    if (divider) divider.style.left = pct;
  }

  update(slider.value);

  slider.addEventListener('input', function () {
    update(this.value);
  });

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var bSrc = this.dataset.before;
      var aSrc = this.dataset.after;
      var beforeImg = wrap.querySelector('.compare-before img');
      var afterImg = wrap.querySelector('.compare-after img');
      beforeImg.src = bSrc;
      afterImg.src = aSrc;
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      slider.value = 50;
      update(50);
    });
  });
})();

// Editing process over iterations: step-through, dots, autoplay
(function () {
  var slides = document.querySelectorAll('.iter-slide');
  var dots   = document.querySelectorAll('.iter-dot');
  var prevBtn = document.querySelector('.iter-prev');
  var nextBtn = document.querySelector('.iter-next');
  var checkbox = document.querySelector('.iter-autoplay-checkbox');
  if (!slides.length) return;

  var current = 0;
  var total = slides.length;
  var timer = null;

  function goTo(idx) {
    idx = ((idx % total) + total) % total;
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  prevBtn && prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn && nextBtn.addEventListener('click', function () { goTo(current + 1); });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(this.dataset.iter, 10));
    });
  });

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(function () { goTo(current + 1); }, 2500);
  }

  function stopAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  checkbox && checkbox.addEventListener('change', function () {
    this.checked ? startAutoplay() : stopAutoplay();
  });
})();

// Results IO lightbox: click any image to view larger version
(function () {
  const images = document.querySelectorAll('.results-io-gallery .results-io-img');
  if (!images.length) return;

  function openLightbox(src, alt) {
    const backdrop = document.createElement('div');
    backdrop.className = 'io-lightbox-backdrop';

    backdrop.innerHTML = `
      <div class="io-lightbox" role="dialog" aria-modal="true">
        <div class="io-lightbox-main">
          <div>
            <img src="${src}" alt="${alt || 'Image preview'}">
          </div>
        </div>
        <div class="io-lightbox-footer">
          <span>Click anywhere to close</span>
        </div>
      </div>
    `;

    function close() {
      document.removeEventListener('keydown', onKey);
      backdrop.removeEventListener('click', onClick);
      backdrop.remove();
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    function onClick(e) {
      if (e.target === backdrop) close();
    }

    document.body.appendChild(backdrop);
    document.addEventListener('keydown', onKey);
    backdrop.addEventListener('click', onClick);
  }

  images.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
})();
