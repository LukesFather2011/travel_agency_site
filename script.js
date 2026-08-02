/* =============================================
   SAND SEA N SUN TRAVEL — script.js
   ============================================= */

// ---- Year in footer ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Sticky nav on scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ---- Smooth scroll to quote ----
function scrollToQuote() {
  document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
}

// ---- Smooth scroll helper for footer/nav links ----
function smoothNav(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ---- Scroll-reveal animation ----
const revealTargets = document.querySelectorAll(
  '.why__card, .how__step, .dest__card, .qi'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 80}ms`;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => {
  el.classList.add('will-reveal');
  observer.observe(el);
});

// ---- Inject reveal CSS dynamically ----
const style = document.createElement('style');
style.textContent = `
  .will-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .will-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// ---- Destination strip: drag-to-scroll on desktop ----
const strip = document.querySelector('.dest__strip');
if (strip) {
  let isDown = false, startX, scrollLeft;

  strip.addEventListener('mousedown', (e) => {
    isDown = true;
    strip.style.cursor = 'grabbing';
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });
  strip.addEventListener('mouseleave', () => {
    isDown = false;
    strip.style.cursor = 'grab';
  });
  strip.addEventListener('mouseup', () => {
    isDown = false;
    strip.style.cursor = 'grab';
  });
  strip.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - strip.offsetLeft;
    const walk = (x - startX) * 1.4;
    strip.scrollLeft = scrollLeft - walk;
  });
  strip.style.cursor = 'grab';
}
