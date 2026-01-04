// --- Reveal on scroll ---
const revealEls = document.querySelectorAll('.reveal, .mission .card, .value-item, .timeline .step, .stat, .cta');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target); // stop observing once revealed
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // --- Stats counters ---
  const counters = document.querySelectorAll('.stat span[data-target]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      let current = 0;
      const duration = 1200; // ms
      const frame = 16; // ~60fps
      const step = Math.max(1, Math.floor(target / (duration / frame)));

      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = current;
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countObserver.observe(el));

  // --- Optional: parallax effect for hero background ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.3;
      heroBg.style.transform = `translateY(${offset}px)`;
    });
  }
