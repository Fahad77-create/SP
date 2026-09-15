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
