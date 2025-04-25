// Animations Module

// Binary background animation
document.addEventListener('DOMContentLoaded', () => {
  const binaryBackground = document.querySelector('.binary-background');
  
  if (binaryBackground) {
    createBinaryBackground(binaryBackground);
  }
  
  // Initialize scroll animations
  initScrollAnimations();
});

// Create binary code background
function createBinaryBackground(container) {
  const binary = [];
  const rows = 40;
  const cols = 80;
  
  // Create binary elements
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.className = 'binary-row';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    
    for (let j = 0; j < cols; j++) {
      const digit = document.createElement('span');
      digit.textContent = Math.round(Math.random());
      digit.style.color = 'rgba(94, 53, 177, 0.1)';
      digit.style.fontSize = '12px';
      digit.style.fontFamily = 'monospace';
      digit.style.margin = '1px';
      digit.style.animation = `binaryFade ${3 + Math.random() * 5}s infinite`;
      digit.style.animationDelay = `${Math.random() * 5}s`;
      
      row.appendChild(digit);
      binary.push(digit);
    }
    
    container.appendChild(row);
  }
  
  // Periodically update some binary digits
  setInterval(() => {
    const randomDigits = Math.floor(binary.length * 0.1);
    for (let i = 0; i < randomDigits; i++) {
      const randomIndex = Math.floor(Math.random() * binary.length);
      binary[randomIndex].textContent = Math.round(Math.random());
    }
  }, 2000);
}

// Scroll animations for elements
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.tech-card, .stat-card, .course-card');
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('fade-in-up');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('fade-in-up');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 80)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initialize animations on load
  handleScrollAnimation();
}

// Add animation classes to tech cards with delay
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  
  // Add animation with increasing delay
  setTimeout(() => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100 + (index * 100));
});