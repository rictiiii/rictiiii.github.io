// Scroll-progress based animations for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');

  function updateCardTransforms() {
    const windowHeight = window.innerHeight;

    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top;
      const cardHeight = rect.height;

      // Calculate progress: 0 when card bottom enters viewport, 1 when card top reaches center
      const startPoint = windowHeight;
      const endPoint = windowHeight / 2 - cardHeight / 2;

      let progress = 0;
      if (cardTop < startPoint) {
        progress = (startPoint - cardTop) / (startPoint - endPoint);
        progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      }

      // Apply easing (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);

      // Calculate values based on progress
      const opacity = eased;
      const scale = 0.8 + (0.2 * eased); // 0.8 to 1
      const translateY = 60 - (60 * eased); // 60px to 0
      const rotateX = 20 - (20 * eased); // 20deg to 0deg

      // Store scroll-based values as data attributes for hover to use
      card.dataset.scrollScale = scale;
      card.dataset.scrollTranslateY = translateY;
      card.dataset.scrollRotateX = rotateX;

      // Apply transforms (hover will override if active)
      if (!card.matches(':hover')) {
        card.style.opacity = opacity;
        card.style.transform = `perspective(1200px) scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg)`;
      }
    });
  }

  // Handle hover state
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const scale = parseFloat(this.dataset.scrollScale) || 1;
      const rotateX = parseFloat(this.dataset.scrollRotateX) || 0;
      this.style.transform = `perspective(1200px) scale(${scale}) translateY(-16px) rotateX(${rotateX}deg)`;
    });

    card.addEventListener('mouseleave', function() {
      const scale = parseFloat(this.dataset.scrollScale) || 1;
      const translateY = parseFloat(this.dataset.scrollTranslateY) || 0;
      const rotateX = parseFloat(this.dataset.scrollRotateX) || 0;
      this.style.transform = `perspective(1200px) scale(${scale}) translateY(${translateY}px) rotateX(${rotateX}deg)`;
    });
  });

  // Update on scroll
  window.addEventListener('scroll', updateCardTransforms, { passive: true });

  // Initial update
  updateCardTransforms();
});
