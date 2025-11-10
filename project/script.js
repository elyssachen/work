document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const leftZone = carousel.querySelector('.left-zone');
    const rightZone = carousel.querySelector('.right-zone');
  
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });
  
    const moveToSlide = (currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    };
  
    leftZone.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling || track.lastElementChild;
      moveToSlide(currentSlide, prevSlide);
    });
  
    rightZone.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling || track.firstElementChild;
      moveToSlide(currentSlide, nextSlide);
    });
  });
  

const autoplayVideoIfPresent = (slide) => {
    const video = slide.querySelector('video');
    if (video) {
      video.play().catch(() => {
        // Autoplay might fail silently on some browsers — this prevents errors
      });
    }
  };
  
  const pauseAllVideosExcept = (activeSlide) => {
    slides.forEach(slide => {
      const video = slide.querySelector('video');
      if (video && slide !== activeSlide) {
        video.pause();
        video.currentTime = 0; // optional: reset to beginning
      }
    });
  };

  document.querySelectorAll('.bird-nav img').forEach(bird => {
    bird.addEventListener('click', () => {
      const targetId = bird.getAttribute('data-id');
      const targetSection = document.getElementById(`section-${targetId}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  