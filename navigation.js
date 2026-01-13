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

// Counting animation for metrics
(function() {
  function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease out cubic function for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOutCubic;

      element.textContent = formatNumber(current, suffix);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = formatNumber(end, suffix);
      }
    };
    window.requestAnimationFrame(step);
  }

  function formatNumber(num, suffix) {
    if (suffix === '%') {
      return Math.round(num) + '%';
    } else if (suffix === ' days') {
      return num.toFixed(1) + ' days';
    } else if (suffix === '+') {
      return Math.round(num).toLocaleString() + '+';
    }
    return Math.round(num).toLocaleString();
  }

  function parseMetricValue(text) {
    // Remove commas and parse the number
    const cleanText = text.replace(/,/g, '');

    if (text.includes('%')) {
      return { value: parseFloat(cleanText), suffix: '%' };
    } else if (text.includes('days')) {
      return { value: parseFloat(cleanText), suffix: ' days' };
    } else if (text.includes('+')) {
      return { value: parseFloat(cleanText), suffix: '+' };
    }

    return { value: parseFloat(cleanText), suffix: '' };
  }

  function initCounters() {
    const metricValues = document.querySelectorAll('.hero-metric-value');

    if (metricValues.length === 0) return;

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const originalText = entry.target.textContent;
          const { value, suffix } = parseMetricValue(originalText);

          if (!isNaN(value)) {
            entry.target.textContent = formatNumber(0, suffix);
            animateValue(entry.target, 0, value, 2000, suffix);
          }
        }
      });
    }, observerOptions);

    metricValues.forEach(metric => observer.observe(metric));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();
