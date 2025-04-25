/**
 * IT Creative Code Academy - Animations
 * Handles special animations and effects across the site
 */

document.addEventListener('DOMContentLoaded', function() {
  initTypingAnimation();
  initBinaryBackground();
  animateMatrixEffect();
});

/**
 * Typing animation for hero section subtitle
 */
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;
  
  const phrases = [
    'creativity meets code.',
    'innovation begins.',
    'future developers learn.',
    'tech skills are mastered.',
    'coding becomes art.'
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function typeText() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      // Deleting text
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Typing text
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typingSpeed = 100; // Normal typing speed
    }
    
    // Check if word is complete
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      // Pause at the end of the phrase
      isDeleting = true;
      typingSpeed = 1500; // Pause before deleting
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing new phrase
    }
    
    setTimeout(typeText, typingSpeed);
  }
  
  // Start the typing animation
  typeText();
}

/**
 * Creates and animates the binary background
 */
function initBinaryBackground() {
  const background = document.getElementById('binary-background');
  if (!background) return;
  
  const columns = Math.floor(window.innerWidth / 20);
  const rows = Math.floor(window.innerHeight / 20);
  
  // Clear existing content
  background.innerHTML = '';
  
  // Create binary digits with different density based on screen size
  const density = window.innerWidth < 768 ? 50 : 100;
  
  for (let i = 0; i < density; i++) {
    const digit = document.createElement('div');
    digit.classList.add('binary-digit');
    
    // Random position
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    
    // Random size
    const size = Math.floor(Math.random() * 16) + 8;
    
    // Random animation delay
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 10;
    
    digit.style.left = `${x}px`;
    digit.style.top = `${y}px`;
    digit.style.fontSize = `${size}px`;
    digit.style.animationDelay = `${delay}s`;
    digit.style.animationDuration = `${duration}s`;
    
    background.appendChild(digit);
  }
  
  // Update on window resize
  window.addEventListener('resize', debounce(() => {
    initBinaryBackground();
  }, 500));
}

/**
 * Matrix-like raining code effect
 */
function animateMatrixEffect() {
  const canvas = document.createElement('canvas');
  const container = document.getElementById('binary-background');
  if (!container) return;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '0';
  canvas.style.opacity = '0.15';
  
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Matrix characters (binary and hex)
  const characters = '01';
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  
  // Array to track the current Y position of each column
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
  }
  
  // Drawing the characters
  function draw() {
    // Black semi-transparent background to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Get theme colors
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.6)';
    
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px monospace`;
    
    // Draw each column
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      
      // Draw the character
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Increment Y coordinate
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Reset drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }
  }, 500));
  
  // Animation loop
  setInterval(draw, 50);
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Animate elements when they scroll into view
 */
document.addEventListener('scroll', function() {
  const animatedElements = document.querySelectorAll('.course-card, .feature-card, .instructor-card, .info-card, .stat-item');
  
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.transform = 'translateY(0)';
      element.style.opacity = '1';
    }
  });
});

/**
 * Parallax scroll effect
 */
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  
  // Apply parallax to background elements
  document.querySelectorAll('.binary-digit').forEach(element => {
    const speed = element.getAttribute('data-speed') || 0.05;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});