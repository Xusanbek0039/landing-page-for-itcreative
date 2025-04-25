/**
 * IT Creative Code Academy - Dark Mode Toggle
 * Handles dark/light mode theme switching
 */

document.addEventListener('DOMContentLoaded', function() {
  initDarkModeToggle();
});

function initDarkModeToggle() {
  const darkModeToggle = document.getElementById('darkmode-toggle');
  const body = document.body;
  
  if (!darkModeToggle) return;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme based on saved preference or default to dark
  if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    darkModeToggle.checked = true;
  } else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    darkModeToggle.checked = false;
  }
  
  // Toggle theme when checkbox changes
  darkModeToggle.addEventListener('change', function() {
    // Add transition class for smooth theme switching
    body.classList.add('theme-transition');
    
    if (this.checked) {
      // Switch to light mode
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 1000);
    
    // Update terminal styling
    updateTerminalForTheme();
    
    // Update matrix effect colors
    updateMatrixColors();
  });
}

/**
 * Updates terminal styling based on the selected theme
 */
function updateTerminalForTheme() {
  const terminal = document.querySelector('.terminal-container');
  if (!terminal) return;
  
  // Make sure terminal maintains dark styling in light mode
  if (document.body.classList.contains('light-mode')) {
    terminal.style.backgroundColor = '#1a1a1a';
    terminal.style.color = '#f3f4f6';
  } else {
    terminal.style.backgroundColor = '';
    terminal.style.color = '';
  }
}

/**
 * Updates Matrix animation colors based on theme
 */
function updateMatrixColors() {
  // This will be handled by the matrix animation function
  // which already checks for theme in its draw function
}

/**
 * Detects user's preferred color scheme
 */
function detectColorScheme() {
  // Check if the user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  // Default to dark mode
  return 'dark';
}

// Apply initial theme based on user's preference
window.addEventListener('load', function() {
  const preferredTheme = detectColorScheme();
  const darkModeToggle = document.getElementById('darkmode-toggle');
  
  if (preferredTheme === 'light' && darkModeToggle) {
    darkModeToggle.checked = true;
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
});