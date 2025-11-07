window.onload = function() {
    document.getElementById('brand-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading animation
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
        
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_14vzprl', 'template_0egymt8', this)
            .then(function() {
                console.log('SUCCESS!');
                window.location.href = '../thank-you/';
            }, function(error) {
                console.log('FAILED...', error);
                // Hide loading animation on error
                submitBtn.disabled = false;
                submitBtn.innerHTML = btnText;
                alert('Failed to submit form. Please try again.');
            });
    });
}