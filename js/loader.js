// Loading Screen

document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  
  if (loadingScreen) {
    // Hide loading screen after animation completes
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      
      // Remove from DOM after transition completes
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 2500);
  }
});