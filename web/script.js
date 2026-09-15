const performanceSlides = document.querySelectorAll('.track-slide');
const performanceDots = document.querySelectorAll('.track-dots span');
const performanceArrows = document.querySelectorAll('.track-arrow');
let performanceIndex = 0;

function showPerformanceSlide(index) {
  performanceIndex = (index + performanceSlides.length) % performanceSlides.length;
  performanceSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === performanceIndex);
    performanceDots[slideIndex].classList.toggle('active', slideIndex === performanceIndex);
  });
}

performanceArrows[0].addEventListener('click', () => showPerformanceSlide(performanceIndex - 1));
performanceArrows[1].addEventListener('click', () => showPerformanceSlide(performanceIndex + 1));
performanceDots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => showPerformanceSlide(dotIndex));
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileMenu();
});
