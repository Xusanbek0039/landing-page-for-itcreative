/**
 * IT Creative Code Academy - Main JavaScript
 * Handles core functionality for the landing page
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initCustomCursor();
  initScrollAnimations();
  initStatCounters();
  initTestimonialSlider();
  initFaqAccordion();
  
  // Show the page content with a subtle fade in
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
  }, 100);
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      body.classList.toggle('mobile-menu-open');
      menuToggle.querySelector('i').classList.toggle('fa-bars');
      menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close menu when clicking a nav link on mobile
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (body.classList.contains('mobile-menu-open')) {
          body.classList.remove('mobile-menu-open');
          menuToggle.querySelector('i').classList.add('fa-bars');
          menuToggle.querySelector('i').classList.remove('fa-times');
        }
      });
    });
  }
}

/**
 * Custom Cursor
 */
function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  
  if (cursor && window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .faq-question, .course-card, .feature-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
      
      el.addEventListener('mousedown', () => {
        cursor.classList.add('active');
      });
      
      el.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
      });
    });
  }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
  // Add fade-in class to animate elements when scrolled into view
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.classList.add('fade-in');
  });
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  // Initial check for elements in viewport
  checkVisibility();
  
  // Check elements on scroll
  window.addEventListener('scroll', checkVisibility);
  
  function checkVisibility() {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  }
  
  // Add scroll behavior to navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Offset for fixed header
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.padding = '8px 0';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '';
      header.style.boxShadow = '';
    }
  });
}

/**
 * Animated Statistics Counter
 */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number');
  
  function animateCounter(target, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      target.textContent = currentCount;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        target.textContent = end;
      }
    };
    
    window.requestAnimationFrame(step);
  }
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  let countersStarted = false;
  
  function checkCounters() {
    if (!countersStarted && stats.length > 0 && isInViewport(stats[0])) {
      countersStarted = true;
      
      stats.forEach(stat => {
        const endValue = parseInt(stat.getAttribute('data-count'), 10);
        animateCounter(stat, 0, endValue, 2000);
      });
    }
  }
  
  // Check on scroll
  window.addEventListener('scroll', checkCounters);
  
  // Initial check
  checkCounters();
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  
  if (testimonials.length === 0) return;
  
  let currentIndex = 0;
  
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show current testimonial and activate current dot
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
  
  // Initialize dots click event
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showTestimonial(currentIndex);
    });
  });
  
  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  }
  
  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  }
  
  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle current item
      item.classList.toggle('active');
      
      // Toggle icon
      const icon = item.querySelector('.faq-toggle i');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
      
      // Close other items (uncomment for accordion behavior)
      /*
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-toggle i').classList.add('fa-plus');
          otherItem.querySelector('.faq-toggle i').classList.remove('fa-minus');
        }
      });
      */
    });
  });
}

/**
 * Generate Binary Background
 */
function createBinaryBackground() {
  const background = document.getElementById('binary-background');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const density = Math.floor((width * height) / 10000); // Adjust for density
  
  for (let i = 0; i < density; i++) {
    const digit = document.createElement('div');
    digit.classList.add('binary-digit');
    
    // Random position
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    
    // Random size
    const size = Math.floor(Math.random() * 20) + 10;
    
    // Random opacity
    const opacity = (Math.random() * 0.3) + 0.05;
    
    // Random animation delay
    const delay = Math.random() * 5;
    
    digit.style.left = `${x}px`;
    digit.style.top = `${y}px`;
    digit.style.fontSize = `${size}px`;
    digit.style.opacity = opacity;
    digit.style.animationDelay = `${delay}s`;
    
    background.appendChild(digit);
  }
}

// Initialize binary background
createBinaryBackground();

// Import new modules
import { init3DBackground, initLoadingScreen, initBinaryRain } from './3d.js';
import { initCourseModals } from './courseModal.js';

// Initialize new features
document.addEventListener('DOMContentLoaded', function() {
  // Initialize loading screen
  initLoadingScreen();
  
  // Initialize other features after loading
  setTimeout(() => {
    init3DBackground();
    initBinaryRain();
    initCourseModals();
    
    // Update course icons to modern style
    updateCourseIcons();
  }, 2000);
});

function updateCourseIcons() {
  const courseIcons = document.querySelectorAll('.course-icon');
  
  courseIcons.forEach(icon => {
    icon.classList.add('language-icon');
    
    // Add 3D hover effect
    icon.addEventListener('mousemove', (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      icon.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    // Reset on mouse leave
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}