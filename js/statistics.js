// Statistics Counter Animation

document.addEventListener('DOMContentLoaded', () => {
  // Initialize stat counters
  initStatCounters();
});

function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number');
  
  // Intersection Observer to trigger counter when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  stats.forEach(stat => {
    observer.observe(stat);
  });
}

function startCounter(statElement) {
  const target = parseFloat(statElement.getAttribute('data-target'));
  const isDecimal = String(target).includes('.');
  const duration = 2000; // in milliseconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameDuration);
  
  let frame = 0;
  const countTo = isDecimal ? target * 10 : target;
  
  const counter = setInterval(() => {
    frame++;
    
    // Calculate current count
    const progress = frame / totalFrames;
    const currentCount = Math.round(countTo * progress * (1 - progress + progress * 2));
    
    // Update text
    if (isDecimal) {
      // Format for decimal numbers (e.g., 4.8)
      statElement.textContent = (currentCount / 10).toFixed(1);
    } else {
      // Format for integers with thousands separator
      statElement.textContent = currentCount.toLocaleString();
    }
    
    // Stop counter when complete
    if (frame === totalFrames) {
      clearInterval(counter);
      
      // Ensure final number is exactly the target
      if (isDecimal) {
        statElement.textContent = target.toFixed(1);
      } else {
        statElement.textContent = target.toLocaleString();
      }
    }
  }, frameDuration);
}