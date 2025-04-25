/**
 * IT Creative Code Academy - Terminal Animation
 * Simulates a coding terminal with typing and interactive effects
 */

document.addEventListener('DOMContentLoaded', function() {
  initTerminal();
});

function initTerminal() {
  const terminalContent = document.getElementById('terminal-content');
  if (!terminalContent) return;
  
  // Welcome messages to display
  const messages = [
    "Welcome to IT Creative Code Academy!",
    "",
    "We're excited to have you here. Our mission is to transform",
    "beginners into confident developers through hands-on learning.",
    "",
    "What would you like to learn today?",
    "",
    "academy@itcca:~$ ls courses/",
    "html-css/  javascript/  python/  react/  node-js/  c++/",
    "",
    "academy@itcca:~$ cat mission.txt",
    "At IT Creative Code Academy, we believe that coding is",
    "more than just a skill—it's a creative superpower.",
    "",
    "Learn. Code. Create. Innovate.",
    ""
  ];
  
  // Command history for interactive terminal
  const commandHistory = [
    "whoami",
    "cat welcome.txt",
    "ls courses/",
    "cat mission.txt",
    "help"
  ];
  
  // Interactive commands that users can try
  const availableCommands = {
    help: () => [
      "Available commands:",
      "  help       - Display this help message",
      "  courses    - List available courses",
      "  about      - About the academy",
      "  contact    - Contact information",
      "  clear      - Clear the terminal"
    ],
    courses: () => [
      "Available courses:",
      "  html-css    - Web Fundamentals with HTML & CSS",
      "  javascript  - JavaScript Programming",
      "  python      - Python for Beginners to Advanced",
      "  react       - Modern Web Apps with React",
      "  node-js     - Backend Development with Node.js",
      "  c++         - C++ Programming & Game Development"
    ],
    about: () => [
      "IT Creative Code Academy",
      "Founded in 2020, we've trained over 1,500 students",
      "in modern programming technologies. Our hands-on",
      "approach ensures you learn by building real projects.",
      "95% of our graduates find jobs within 3 months."
    ],
    contact: () => [
      "Contact Information:",
      "  Email: info@itcreativecode.com",
      "  Phone: (555) 123-4567",
      "  Location: 123 Tech Lane, Innovation District",
      "           San Francisco, CA 94107"
    ],
    clear: () => {
      setTimeout(() => {
        // Clear all lines except the prompt
        while (terminalContent.children.length > 1) {
          terminalContent.removeChild(terminalContent.firstChild);
        }
      }, 100);
      return [];
    }
  };
  
  // Start typing animation for initial messages
  let messageIndex = 0;
  
  function typeNextMessage() {
    if (messageIndex >= messages.length) {
      // All messages typed, make terminal interactive
      makeTerminalInteractive();
      return;
    }
    
    const message = messages[messageIndex];
    
    if (message.startsWith("academy@itcca:~$")) {
      // If it's a command line, split into prompt and command
      const commandParts = message.split('$ ');
      const line = document.createElement('div');
      line.className = 'line';
      
      const prompt = document.createElement('span');
      prompt.className = 'prompt';
      prompt.textContent = commandParts[0] + '$ ';
      
      const command = document.createElement('span');
      command.className = 'command';
      command.textContent = '';
      
      line.appendChild(prompt);
      line.appendChild(command);
      terminalContent.appendChild(line);
      
      // Type the command character by character
      let charIndex = 0;
      const typeCommand = setInterval(() => {
        if (charIndex < commandParts[1].length) {
          command.textContent += commandParts[1][charIndex];
          charIndex++;
          terminalContent.scrollTop = terminalContent.scrollHeight;
        } else {
          clearInterval(typeCommand);
          messageIndex++;
          setTimeout(typeNextMessage, 500);
        }
      }, 100);
    } else {
      // Regular output line
      const line = document.createElement('div');
      line.className = 'line';
      line.textContent = '';
      terminalContent.appendChild(line);
      
      // Type the message character by character
      let charIndex = 0;
      const typeMessage = setInterval(() => {
        if (charIndex < message.length) {
          line.textContent += message[charIndex];
          charIndex++;
          terminalContent.scrollTop = terminalContent.scrollHeight;
        } else {
          clearInterval(typeMessage);
          messageIndex++;
          setTimeout(typeNextMessage, 200);
        }
      }, 20);
    }
  }
  
  // Start the typing animation after a short delay
  setTimeout(typeNextMessage, 1000);
  
  // Make the terminal interactive after initial animation
  function makeTerminalInteractive() {
    // Create input line
    const inputLine = document.createElement('div');
    inputLine.className = 'line';
    
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = 'academy@itcca:~$ ';
    
    const input = document.createElement('span');
    input.className = 'command';
    input.contentEditable = true;
    input.spellcheck = false;
    
    inputLine.appendChild(prompt);
    inputLine.appendChild(input);
    terminalContent.appendChild(inputLine);
    
    // Focus the input
    setTimeout(() => {
      input.focus();
    }, 100);
    
    // Handle input
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        
        const command = input.textContent.trim().toLowerCase();
        
        // Make input non-editable
        input.contentEditable = false;
        
        // Process command
        if (command) {
          // Check if command exists
          if (availableCommands[command]) {
            const output = availableCommands[command]();
            
            // Display command output
            output.forEach(line => {
              const outputLine = document.createElement('div');
              outputLine.className = 'line';
              outputLine.textContent = line;
              terminalContent.appendChild(outputLine);
            });
          } else {
            // Command not found
            const errorLine = document.createElement('div');
            errorLine.className = 'line';
            errorLine.textContent = `Command not found: ${command}. Type 'help' for available commands.`;
            terminalContent.appendChild(errorLine);
          }
        }
        
        // Create new input line
        if (command !== 'clear') {
          makeTerminalInteractive();
        }
        
        // Scroll to bottom
        terminalContent.scrollTop = terminalContent.scrollHeight;
      }
    });
  }
}