window.onload = function() {
    document.getElementById('brand-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_14vzprl', 'template_0egymt8', this)
            .then(function() {
                console.log('SUCCESS!');
                window.location.href = '../thank-you/';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}