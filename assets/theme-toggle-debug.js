// Enhanced Mobile Navigation System
console.log('=== ENHANCED MOBILE NAV LOADING ===');

document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM LOADED ===');
  
  // Find elements
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('navbar-mobile');
  const mobileToggle = document.getElementById('navbar-toggle');
  
  console.log('Elements found:');
  console.log('- toggleBtn:', toggleBtn);
  console.log('- toggleBtnMobile:', toggleBtnMobile);
  console.log('- navbar:', navbar);
  console.log('- mobileMenu:', mobileMenu);
  console.log('- mobileToggle:', mobileToggle);
  
  // Initialize theme
  function initTheme() {
    const stored = localStorage.getItem('theme');
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (systemDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcons(theme);
  }
  
  function updateThemeIcons(theme) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      icon.textContent = theme === 'light' ? '🌙' : '☀️';
    });
  }
  
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
    console.log('Theme changed to:', newTheme);
  }
  
  // Enhanced Mobile Menu Functions
  let isMenuOpen = false;
  
  window.toggleMobileMenu = function() {
    console.log('=== TOGGLE MOBILE MENU CALLED ===');
    
    if (!mobileMenu || !mobileToggle) {
      console.error('Mobile menu elements not found!');
      return;
    }
    
    isMenuOpen = !isMenuOpen;
    
    // Update menu state
    if (isMenuOpen) {
      mobileMenu.classList.add('active');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      console.log('Mobile menu opened');
    } else {
      mobileMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      console.log('Mobile menu closed');
    }
    
    console.log('Mobile menu state:', {
      isOpen: isMenuOpen,
      hasActiveClass: mobileMenu.classList.contains('active'),
      toggleActiveClass: mobileToggle.classList.contains('active')
    });
  };
  
  window.closeMobileMenu = function() {
    if (isMenuOpen) {
      window.toggleMobileMenu();
    }
  };
  
  // Add event listeners
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Theme toggle clicked');
      toggleTheme();
    });
  }
  
  if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Mobile theme toggle clicked');
      toggleTheme();
    });
  }
  
  if (mobileToggle) {
    console.log('Adding enhanced click listener to mobile toggle');
    
    // Primary event listener
    mobileToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== MOBILE TOGGLE CLICKED (addEventListener) ===');
      window.toggleMobileMenu();
    });
    
    // Touch events for better mobile support
    mobileToggle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      console.log('=== MOBILE TOGGLE TOUCHED ===');
    });
    
    mobileToggle.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== MOBILE TOGGLE TOUCH END ===');
      window.toggleMobileMenu();
    });
    
  } else {
    console.error('Mobile toggle button not found!');
  }
  
  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        console.log('Clicked outside mobile menu, closing');
        window.closeMobileMenu();
      }
    });
  }
  
  // Close menu when clicking on navigation links
  const mobileNavLinks = document.querySelectorAll('.navbar-mobile .navbar-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      console.log('Mobile nav link clicked, closing menu');
      window.closeMobileMenu();
    });
  });
  
  // Keyboard support
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      console.log('Escape pressed, closing mobile menu');
      window.closeMobileMenu();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    console.log('Window resized to:', width);
    
    // Close mobile menu if switching to desktop
    if (width > 900 && isMenuOpen) {
      console.log('Switched to desktop view, closing mobile menu');
      window.closeMobileMenu();
    }
    
    setTimeout(window.debugMobileNav, 100);
  });
  
  // Enhanced debug function
  window.debugMobileNav = function() {
    console.log('=== ENHANCED MOBILE NAV DEBUG ===');
    console.log('Screen width:', window.innerWidth);
    console.log('Is mobile view (≤900px):', window.innerWidth <= 900);
    console.log('Menu open state:', isMenuOpen);
    
    if (mobileToggle) {
      const toggleStyle = getComputedStyle(mobileToggle);
      console.log('Mobile toggle display:', toggleStyle.display);
      console.log('Mobile toggle visibility:', toggleStyle.visibility);
      console.log('Mobile toggle opacity:', toggleStyle.opacity);
    }
    
    if (mobileMenu) {
      const menuStyle = getComputedStyle(mobileMenu);
      console.log('Mobile menu active class:', mobileMenu.classList.contains('active'));
      console.log('Mobile menu opacity:', menuStyle.opacity);
      console.log('Mobile menu visibility:', menuStyle.visibility);
      console.log('Mobile menu transform:', menuStyle.transform);
    }
    
    const desktopNav = document.querySelector('.navbar .navbar-nav');
    if (desktopNav) {
      console.log('Desktop nav display:', getComputedStyle(desktopNav).display);
    }
  };
  
  // Initialize
  initTheme();
  
  // Auto-debug after load
  setTimeout(window.debugMobileNav, 1000);
  
  console.log('=== ENHANCED MOBILE NAV LOADED ===');
});
