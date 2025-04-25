/**
 * IT Creative Code Academy - Form Validation
 * Handles contact form validation and submission
 */

document.addEventListener('DOMContentLoaded', function() {
  initFormValidation();
});

function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  // Form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const submitBtn = document.querySelector('.submit-btn');
  
  // Focus effect for inputs
  const inputs = contactForm.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
    
    // Validate on input
    input.addEventListener('input', function() {
      validateInput(this);
    });
  });
  
  // Submit form handling
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all inputs before submission
    let isValid = true;
    
    if (!validateInput(nameInput)) isValid = false;
    if (!validateInput(emailInput)) isValid = false;
    if (phoneInput.value && !validateInput(phoneInput)) isValid = false;
    if (!validateInput(messageInput)) isValid = false;
    
    if (isValid) {
      // Show sending animation
      submitBtn.classList.add('sending');
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual submission)
      setTimeout(() => {
        // Show success message
        showFormSubmissionMessage(true);
        
        // Reset form
        contactForm.reset();
        
        // Remove sending state
        submitBtn.classList.remove('sending');
        submitBtn.disabled = false;
      }, 2000);
    } else {
      // Show error shake animation
      submitBtn.classList.add('error');
      setTimeout(() => {
        submitBtn.classList.remove('error');
      }, 500);
    }
  });
  
  /**
   * Validates a single input field
   * @param {HTMLElement} input - The input element to validate
   * @returns {boolean} - Whether the input is valid
   */
  function validateInput(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous validation states
    formGroup.classList.remove('error', 'success');
    
    // Check which input we're validating
    switch (input.id) {
      case 'name':
        if (input.value.trim() === '') {
          isValid = false;
          errorMessage = 'Name is required';
        } else if (input.value.trim().length < 2) {
          isValid = false;
          errorMessage = 'Name must be at least 2 characters';
        }
        break;
        
      case 'email':
        if (input.value.trim() === '') {
          isValid = false;
          errorMessage = 'Email is required';
        } else if (!isValidEmail(input.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        break;
        
      case 'phone':
        if (input.value.trim() !== '' && !isValidPhone(input.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid phone number';
        }
        break;
        
      case 'message':
        if (input.value.trim() === '') {
          isValid = false;
          errorMessage = 'Please enter your message';
        } else if (input.value.trim().length < 10) {
          isValid = false;
          errorMessage = 'Message must be at least 10 characters';
        }
        break;
    }
    
    // Update UI based on validation
    if (!isValid) {
      formGroup.classList.add('error');
      if (errorElement) errorElement.textContent = errorMessage;
    } else {
      formGroup.classList.add('success');
      if (errorElement) errorElement.textContent = '';
    }
    
    return isValid;
  }
  
  /**
   * Email validation regex
   * @param {string} email - The email to validate
   * @returns {boolean} - Whether the email is valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Phone validation regex
   * @param {string} phone - The phone number to validate
   * @returns {boolean} - Whether the phone number is valid
   */
  function isValidPhone(phone) {
    const phoneRegex = /^[\d\+\-\(\) ]{7,20}$/;
    return phoneRegex.test(phone);
  }
  
  /**
   * Shows form submission result message
   * @param {boolean} success - Whether the submission was successful
   */
  function showFormSubmissionMessage(success) {
    // Create a message container
    const messageContainer = document.createElement('div');
    messageContainer.className = success ? 'form-success-message' : 'form-error-message';
    
    // Style the message
    Object.assign(messageContainer.style, {
      padding: '15px',
      marginTop: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: 'bold',
      opacity: '0',
      transition: 'opacity 0.3s ease',
      backgroundColor: success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
      color: success ? 'var(--success)' : 'var(--error)',
      border: `1px solid ${success ? 'var(--success)' : 'var(--error)'}`,
    });
    
    // Add icon and text
    const icon = document.createElement('i');
    icon.className = success ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    icon.style.marginRight = '8px';
    
    const text = document.createTextNode(
      success 
        ? 'Thanks for your message! We\'ll get back to you soon.' 
        : 'Sorry, there was a problem submitting your form. Please try again.'
    );
    
    messageContainer.appendChild(icon);
    messageContainer.appendChild(text);
    
    // Add to DOM after the form
    contactForm.after(messageContainer);
    
    // Fade in
    setTimeout(() => {
      messageContainer.style.opacity = '1';
    }, 10);
    
    // Remove message after delay
    setTimeout(() => {
      messageContainer.style.opacity = '0';
      setTimeout(() => {
        messageContainer.remove();
      }, 300);
    }, 5000);
  }
  
  // Real-time character counter for message
  if (messageInput) {
    messageInput.addEventListener('input', function() {
      const currentLength = this.value.length;
      let parentNode = this.parentElement;
      
      // Check if counter already exists
      let counter = parentNode.querySelector('.character-counter');
      
      if (!counter) {
        counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.fontSize = '0.8rem';
        counter.style.color = 'var(--text-secondary)';
        counter.style.textAlign = 'right';
        counter.style.marginTop = '5px';
        parentNode.appendChild(counter);
      }
      
      counter.textContent = `${currentLength} characters`;
      
      // Style based on length
      if (currentLength < 10) {
        counter.style.color = 'var(--error)';
      } else if (currentLength > 500) {
        counter.style.color = 'var(--warning)';
      } else {
        counter.style.color = 'var(--text-secondary)';
      }
    });
  }
}