
/**
 * form-validation.ts - Handles appointment form validation
 */

export const initFormValidation = () => {
  const appointmentForm = document.getElementById('appointment-form') as HTMLFormElement | null;
  
  if (!appointmentForm) return;
  
  const validateInput = (input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      errorMessage = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required`;
    }
    
    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }
    
    // Phone validation
    if (input.name === 'phone' && input.value.trim()) {
      const phoneRegex = /^\d{10,}$/;
      if (!phoneRegex.test(input.value.replace(/\D/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }
    
    // Update UI
    if (errorElement) {
      errorElement.textContent = errorMessage;
      
      if (!isValid) {
        input.classList.add('border-red-500');
        errorElement.classList.remove('hidden');
      } else {
        input.classList.remove('border-red-500');
        errorElement.classList.add('hidden');
      }
    }
    
    return isValid;
  };
  
  // Form submission
  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    const formElements = appointmentForm.elements;
    
    // Validate all inputs
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (element.name && element.type !== 'submit') {
        if (!validateInput(element)) {
          isFormValid = false;
        }
      }
    }
    
    if (isFormValid) {
      // Form is valid, submit or process data here
      alert('Form submitted successfully!');
      appointmentForm.reset();
    }
  });
  
  // Validate on blur
  const inputs = appointmentForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
    });
    
    input.addEventListener('input', () => {
      if (input.classList.contains('border-red-500')) {
        validateInput(input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
      }
    });
  });
};
