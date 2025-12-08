const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const submenuParents = document.querySelectorAll('.has-submenu');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

submenuParents.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth < 960) {
      e.preventDefault();
      item.classList.toggle('open');
    }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Carousel controls
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('[data-carousel="prev"]');
const next = document.querySelector('[data-carousel="next"]');

const scrollAmount = 220;
if (carousel && prev && next) {
  prev.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  next.addEventListener('click', () => carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}

// Search page helper
const searchTermEl = document.querySelector('[data-search-term]');
if (searchTermEl) {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  searchTermEl.textContent = q && q.trim().length ? `"${q.trim()}"` : 'toutes les catégories';
}
