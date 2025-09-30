// Slider Banner
const slider = document.getElementById('slider');
let index = 0;

function showSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slider.children.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + slider.children.length) % slider.children.length;
  showSlide();
}

// Auto play
setInterval(nextSlide, 5000);
