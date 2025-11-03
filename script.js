function submitForm() {
    const templateParams = {
        business_name: document.getElementById('business_name').value,
        industry: document.getElementById('industry').value,
        location: document.getElementById('location').value,
        product_service: document.getElementById('product-service').value,
        audience: document.getElementById('audience').value,
        competitors: document.getElementById('competitors').value,
        strengths: document.getElementById('strengths').value,
        brand_feel: document.getElementById('brand-feel').value,
        contact_info: document.getElementById('email').value,
    };

    emailjs.send('service_14vzprl', 'template_0egymt8', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            window.location.href = 'thank_you.html';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to submit the form. Please try again.');
        });

    emailjs.send('service_14vzprl', 'template_an2wwaa', templateParams)
        .then(function(response) {
            console.log('SUCCESS! Customer Reply', response.status, response.text);
        }, function(error) {
            console.log('FAILED...Send Customer Reply', error);
        });
}

// Add form submission event listener
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('brand-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitForm();
        });
    }
});
