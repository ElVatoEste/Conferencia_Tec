// js/scriptHome.js

// 1) Toggle mobile menu
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.navbar-collapse');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('open');
  collapse.classList.toggle('open');
});

// 2) Smooth scroll + cierre de menú al navegar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (collapse.classList.contains('open')) {
        toggler.classList.remove('open');
        collapse.classList.remove('open');
      }
    }
  });
});

// 3) Efecto scroll en navbar
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// 4) Slider de eventos
const slides       = document.querySelectorAll('.eventos-slider .slide');
const prevBtn      = document.querySelector('.slider-prev');
const nextBtn      = document.querySelector('.slider-next');
let   currentSlide = 0;
let   slideTimer   = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
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

function resetSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 5000);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetSlider();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetSlider();
});

// Mostrar la primera diapositiva al cargar
showSlide(currentSlide);
