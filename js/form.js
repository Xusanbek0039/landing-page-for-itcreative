// Form Validation and Submission

document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registration-form');
  
  if (registrationForm) {
    registrationForm.addEventListener('submit', handleFormSubmit);
    
    // Add input animations
    const formInputs = registrationForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      // Focus effect
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
        
        // Add 'filled' class if the input has a value
        if (input.value.trim() !== '') {
          input.parentElement.classList.add('filled');
        } else {
          input.parentElement.classList.remove('filled');
        }
      });
    });
  }
});

function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  
  // Simple validation
  let isValid = true;
  const requiredFields = ['name', 'email', 'course'];
  
  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!formProps[field] || formProps[field].trim() === '') {
      markInvalid(input, 'This field is required');
      isValid = false;
    } else {
      markValid(input);
    }
  });
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formProps.email && !emailRegex.test(formProps.email)) {
    markInvalid(document.getElementById('email'), 'Please enter a valid email address');
    isValid = false;
  }
  
  // If valid, submit the form
  if (isValid) {
    // Show success message (in a real app, this would send data to a server)
    showFormSuccess();
  }
}

function markInvalid(element, message) {
  // Add error class
  element.classList.add('invalid');
  
  // Create or update error message
  let errorElement = element.parentElement.querySelector('.error-message');
  
  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    element.parentElement.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
}

function markValid(element) {
  // Remove error class
  element.classList.remove('invalid');
  
  // Remove error message if it exists
  const errorElement = element.parentElement.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}

function showFormSuccess() {
  const form = document.getElementById('registration-form');
  
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerHTML = `
    <div class="success-icon">✓</div>
    <h3>Registration Successful!</h3>
    <p>Thank you for registering. We will contact you shortly with more information about your selected course.</p>
  `;
  
  // Replace form with success message
  form.innerHTML = '';
  form.appendChild(successMessage);
  form.classList.add('form-success');
  
  // Style success message
  const styles = document.createElement('style');
  styles.textContent = `
    .success-message {
      text-align: center;
      padding: 40px 20px;
      animation: fadeIn 0.5s ease forwards;
    }
    
    .success-icon {
      width: 64px;
      height: 64px;
      background-color: var(--success);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin: 0 auto 24px;
      animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    .success-message h3 {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }
    
    .success-message p {
      color: var(--text-secondary);
    }
    
    .form-success {
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  
  document.head.appendChild(styles);
}