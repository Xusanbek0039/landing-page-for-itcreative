// Dark Mode Toggle

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-track');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
  
  // Toggle theme when clicked
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});