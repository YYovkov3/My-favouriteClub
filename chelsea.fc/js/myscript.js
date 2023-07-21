let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.style.display = idx === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".arrow.next").addEventListener("click", nextSlide);
document.querySelector(".arrow.prev").addEventListener("click", prevSlide);

showSlide(currentSlide); 
setInterval(nextSlide, 20000);

function showMatches(category) {
  const menMatches = document.querySelector('.match-list.men');
  const womenMatches = document.querySelector('.match-list.women');

  if (category === 'men') {
    menMatches.style.display = 'block';
    womenMatches.style.display = 'none';
  } else if (category === 'women') {
    menMatches.style.display = 'none';
    womenMatches.style.display = 'block';
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.men-womenimg');

  slides.forEach(slide => {
    slide.addEventListener('mouseover', function () {
      slide.classList.add('moving-left');
    });

    slide.addEventListener('mouseout', function () {
      slide.classList.remove('moving-left');
    });
  });
});