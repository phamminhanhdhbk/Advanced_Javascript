let slideIndex = 0;
let autoSlideInterval;
let autoSlideActive = true;

document.addEventListener('DOMContentLoaded', function() {
  showSlides();
  autoSlide();
});

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function autoSlide() {
  if (autoSlideActive) {
    autoSlideInterval = setInterval(() => {
      slideIndex++;
      showSlides();
    }, 3000); // Thời gian chuyển đổi tự động: 3000ms (3 giây)
  }
}

function toggleAuto() {
  autoSlideActive = !autoSlideActive;
  const autoButton = document.querySelector('.control-button.auto');
  autoButton.classList.toggle('active');
  
  if (autoSlideActive) {
    autoSlide();
  } else {
    clearInterval(autoSlideInterval);
  }
}
