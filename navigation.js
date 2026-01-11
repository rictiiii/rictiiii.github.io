// Navigation scroll behavior - hide on scroll down, show on scroll up
(function() {
  let lastScrollTop = 0;
  let scrollThreshold = 100; // Start hiding after scrolling 100px
  const nav = document.querySelector('.navigation');

  if (!nav) return;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add background blur when scrolled past threshold
    if (scrollTop > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }

    // Hide/show navigation based on scroll direction
    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide nav
        nav.classList.add('nav-hidden');
      } else {
        // Scrolling up - show nav
        nav.classList.remove('nav-hidden');
      }
    } else {
      // Always show nav at top of page
      nav.classList.remove('nav-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);
})();
