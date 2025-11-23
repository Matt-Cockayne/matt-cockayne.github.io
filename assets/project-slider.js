// Project Highlights Horizontal Slider JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.project-highlights-scroll');
  const leftBtn = document.querySelector('.scroll-btn-left');
  const rightBtn = document.querySelector('.scroll-btn-right');
  
  if (!scrollContainer || !leftBtn || !rightBtn) return;
  
  // Calculate scroll distance (one card width + gap)
  const getScrollDistance = () => {
    const card = document.querySelector('.project-highlight-card');
    if (!card) return 370; // Default: 350px card + 20px gap
    const cardWidth = card.offsetWidth;
    const gap = 24; // 1.5rem = 24px
    return cardWidth + gap;
  };
  
  // Smooth scroll function
  const smoothScroll = (direction) => {
    const scrollDistance = getScrollDistance();
    const currentScroll = scrollContainer.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollDistance 
      : currentScroll + scrollDistance;
    
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };
  
  // Button click handlers
  leftBtn.addEventListener('click', () => smoothScroll('left'));
  rightBtn.addEventListener('click', () => smoothScroll('right'));
  
  // Update button visibility based on scroll position
  const updateButtonVisibility = () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    // Hide left button at start
    leftBtn.style.opacity = scrollLeft <= 0 ? '0.3' : '1';
    leftBtn.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';
    
    // Hide right button at end
    rightBtn.style.opacity = scrollLeft >= maxScroll - 1 ? '0.3' : '1';
    rightBtn.style.pointerEvents = scrollLeft >= maxScroll - 1 ? 'none' : 'auto';
  };
  
  // Listen for scroll events
  scrollContainer.addEventListener('scroll', updateButtonVisibility);
  
  // Initial button state
  updateButtonVisibility();
  
  // Update on window resize
  window.addEventListener('resize', updateButtonVisibility);
  
  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  scrollContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  scrollContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  const handleSwipe = () => {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left, scroll right
        smoothScroll('right');
      } else {
        // Swiped right, scroll left
        smoothScroll('left');
      }
    }
  };
  
  // Keyboard navigation
  scrollContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      smoothScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      smoothScroll('right');
    }
  });
  
  // Auto-scroll on hover over buttons (optional)
  let scrollInterval;
  
  const startAutoScroll = (direction) => {
    scrollInterval = setInterval(() => {
      const scrollStep = 5;
      if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollStep;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
      updateButtonVisibility();
    }, 20);
  };
  
  const stopAutoScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };
  
  // Optional: Hold button to auto-scroll
  leftBtn.addEventListener('mousedown', () => startAutoScroll('left'));
  rightBtn.addEventListener('mousedown', () => startAutoScroll('right'));
  leftBtn.addEventListener('mouseup', stopAutoScroll);
  rightBtn.addEventListener('mouseup', stopAutoScroll);
  leftBtn.addEventListener('mouseleave', stopAutoScroll);
  rightBtn.addEventListener('mouseleave', stopAutoScroll);
});
