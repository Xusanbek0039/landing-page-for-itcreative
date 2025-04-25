// Custom Cursor

document.addEventListener('DOMContentLoaded', () => {
  // Check if it's not a touch device
  if (!('ontouchstart' in window)) {
    initCustomCursor();
  }
});

function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !cursorFollower) return;
  
  document.addEventListener('mousemove', (e) => {
    // Update cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // Follower with slight delay (achieved with transition in CSS)
    cursorFollower.style.left = `${e.clientX}px`;
    cursorFollower.style.top = `${e.clientY}px`;
  });
  
  // Handle cursor changes on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .tech-card, .course-card, .toggle-track');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      cursorFollower.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      cursorFollower.classList.remove('active');
    });
  });
  
  // Hide when cursor leaves window
  document.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
    cursorFollower.classList.add('hidden');
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
    cursorFollower.classList.remove('hidden');
  });
  
  // Change on mouse down
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}