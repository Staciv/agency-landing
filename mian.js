let slides = document.querySelectorAll('.recent-projects-card');
let paginationButtons = document.querySelectorAll('.scroll-line');
const slidesToShow = 3;
let currentIndex = 0;

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateSlide(index * slidesToShow);
  });
});

function updateSlide(index) {
  if (index >= 0 && index <= slides.length - slidesToShow) {
    currentIndex = index;

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    for (let i = index; i < index + slidesToShow; i++) {
      slides[i].style.display = 'block';
    }

    paginationButtons.forEach((button, i) => {
      button.classList.toggle('active', i === Math.floor(index / slidesToShow));
    });
  }
}
