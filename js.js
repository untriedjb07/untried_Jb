document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        dropdownContent.classList.toggle('active');
    });

    // Form validation
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    emailInput.addEventListener('input', validateEmailField);
    messageInput.addEventListener('input', validateMessageField);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateEmailField() && validateMessageField()) {
            // If both email and message are valid, submit the form
            this.submit();
        } else {
            // If either email or message is invalid, display error message
            alert('Please correct the highlighted fields.');
        }
    });

    function validateEmailField() {
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'Email is required.';
            emailInput.classList.add('error');
            return false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('error');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
            return true;
        }
    }

    function validateMessageField() {
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            messageError.textContent = 'Message is required.';
            messageInput.classList.add('error');
            return false;
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('error');
            return true;
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
