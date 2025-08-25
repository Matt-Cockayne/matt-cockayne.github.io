// Advanced Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
  
  // Staggered animation utility
  function staggerElements(elements, delay = 100) {
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * delay}ms`;
    });
  }
  
  // Apply staggered animations to hero elements
  const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-tagline, .hero-cta');
  staggerElements(heroElements, 200);
  
  // Enhanced scroll animations with different effects
  const scrollAnimations = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(30px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(-30px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(30px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'scale-up': {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    }
  };
  
  // Advanced intersection observer for scroll animations
  const animationObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animation || 'fade-up';
        const animation = scrollAnimations[animationType];
        
        if (animation) {
          Object.assign(element.style, animation.animate);
          element.classList.add('animated');
        }
        
        // Stagger child elements if they exist
        const children = element.querySelectorAll('.stagger-item');
        if (children.length > 0) {
          staggerElements(children, 100);
          children.forEach(child => child.classList.add('animate-stagger'));
        }
        
        animationObserver.unobserve(element);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Initialize scroll animations
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    const animationType = element.dataset.animation || 'fade-up';
    const animation = scrollAnimations[animationType];
    
    if (animation) {
      Object.assign(element.style, animation.initial);
      element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    animationObserver.observe(element);
  });
  
  // Parallax effect for hero background
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
  
  // Enhanced hover effects for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) rotateX(5deg)';
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotateX(0)';
    });
  });
  
  // Magnetic effect for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translate(0, 0)';
    });
  });
  
  // Text reveal animation
  function textReveal(element, delay = 50) {
    const text = element.textContent;
    element.textContent = '';
    
    const words = text.split(' ');
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = 'inline-block';
      span.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * delay}ms`;
      
      element.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }
  
  // Apply text reveal to titles
  const titlesToReveal = document.querySelectorAll('.text-reveal');
  titlesToReveal.forEach(title => {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          textReveal(entry.target, 100);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(title);
  });
  
  // Typewriter effect
  function typewriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
  
  // Apply typewriter effect to elements with data-typewriter
  const typewriterElements = document.querySelectorAll('[data-typewriter]');
  typewriterElements.forEach(element => {
    const text = element.textContent;
    const speed = parseInt(element.dataset.typewriterSpeed) || 100;
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typewriter(entry.target, text, speed);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
  
  // Smooth page transitions
  function smoothTransition(url) {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }
  
  // Apply smooth transitions to internal links
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]');
  internalLinks.forEach(link => {
    if (!link.href.includes('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothTransition(this.href);
      });
    }
  });
  
  // Loading animation
  function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-spinner"></div>
        <p>Loading...</p>
      </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 300);
    }, 1000);
  }
  
  // Progressive image loading with blur effect
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          
          // Create a new image to preload
          const newImg = new Image();
          newImg.onload = function() {
            img.src = src;
            img.classList.add('loaded');
          };
          newImg.src = src;
          
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      img.style.filter = 'blur(5px)';
      img.style.transition = 'filter 0.3s';
      
      img.addEventListener('load', function() {
        this.style.filter = 'blur(0)';
      });
      
      imageObserver.observe(img);
    });
  }
  
  // Cursor trail effect (optional, can be disabled)
  if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const trail = [];
    const trailLength = 20;
    
    function createTrailDot() {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail';
      document.body.appendChild(dot);
      return dot;
    }
    
    // Initialize trail
    for (let i = 0; i < trailLength; i++) {
      trail.push(createTrailDot());
    }
    
    document.addEventListener('mousemove', function(e) {
      trail.forEach((dot, index) => {
        setTimeout(() => {
          dot.style.left = e.clientX + 'px';
          dot.style.top = e.clientY + 'px';
          dot.style.opacity = (trailLength - index) / trailLength;
          dot.style.transform = `scale(${(trailLength - index) / trailLength})`;
        }, index * 20);
      });
    });
  }
  
  // Performance monitoring and optimization
  function optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency <= 2) {
      document.documentElement.style.setProperty('--transition-fast', '0.1s');
      document.documentElement.style.setProperty('--transition-medium', '0.2s');
      document.documentElement.style.setProperty('--transition-slow', '0.3s');
    }
    
    // Disable animations on slow connections
    if ('connection' in navigator && navigator.connection.effectiveType === 'slow-2g') {
      document.documentElement.style.setProperty('--transition-fast', '0s');
      document.documentElement.style.setProperty('--transition-medium', '0s');
      document.documentElement.style.setProperty('--transition-slow', '0s');
    }
  }
  
  optimizeAnimations();
  
  // Cleanup function for better performance
  window.addEventListener('beforeunload', function() {
    // Remove event listeners and observers
    if (animationObserver) {
      animationObserver.disconnect();
    }
  });
});
