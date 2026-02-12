// Scroll hijacking for image containers
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const scrollContainer = document.getElementById('visual-design-scroll');

    if (!scrollContainer) return;

    let isScrollingContainer = false;

    function handleWheel(e) {
      const container = scrollContainer;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Check if container is in viewport
      const rect = container.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;

      if (inViewport) {
        const delta = e.deltaY;
        const scrollSpeed = 3; // Multiply scroll speed to match page scrolling

        // Scrolling down
        if (delta > 0) {
          if (!atBottom) {
            e.preventDefault();
            container.scrollTop += delta * scrollSpeed;
            isScrollingContainer = true;
          } else {
            isScrollingContainer = false;
          }
        }
        // Scrolling up
        else if (delta < 0) {
          if (!atTop) {
            e.preventDefault();
            container.scrollTop += delta * scrollSpeed;
            isScrollingContainer = true;
          } else {
            isScrollingContainer = false;
          }
        }
      }
    }

    // Add wheel event listener to window
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Add custom scrollbar styling
    const style = document.createElement('style');
    style.textContent = `
      #visual-design-scroll::-webkit-scrollbar {
        width: 8px;
      }

      #visual-design-scroll::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      }

      #visual-design-scroll::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }

      #visual-design-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
      }

      #visual-design-scroll {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
  }
})();
