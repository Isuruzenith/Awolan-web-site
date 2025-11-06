window.onload = function() {
    var form = document.getElementById('brand-form');
    if (!form) {
        return;
    }

    var submitButton = form.querySelector('button[type="submit"]');
    var defaultText = submitButton ? submitButton.querySelector('[data-default-text]') : null;
    var loadingText = submitButton ? submitButton.querySelector('[data-loading-text]') : null;
    var errorMessage = document.getElementById('submit-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (errorMessage) {
            errorMessage.textContent = '';
            errorMessage.classList.add('hidden');
        }

        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        setLoadingState(true);

        // send the form using EmailJS
        emailjs.sendForm('service_14vzprl', 'template_0egymt8', this)
            .then(function() {
                window.location.href = '../thank-you/';
            })
            .catch(function(error) {
                if (errorMessage) {
                    errorMessage.textContent = 'Something went wrong. Please try again.';
                    errorMessage.classList.remove('hidden');
                }
                setLoadingState(false);
                console.error('FAILED...', error);
            });
    });

    function setLoadingState(isLoading) {
        if (submitButton) {
            submitButton.disabled = isLoading;
            submitButton.classList.toggle('opacity-60', isLoading);
            submitButton.classList.toggle('cursor-not-allowed', isLoading);
            submitButton.setAttribute('aria-busy', isLoading ? 'true' : 'false');
        }

        if (defaultText) {
            defaultText.classList.toggle('hidden', isLoading);
        }

        if (loadingText) {
            loadingText.classList.toggle('hidden', !isLoading);
        }

        for (var i = 0; i < form.elements.length; i += 1) {
            var field = form.elements[i];
            if (field === submitButton || !(field instanceof HTMLElement) || !('disabled' in field)) {
                continue;
            }

            if (field instanceof HTMLInputElement && field.type === 'hidden') {
                continue;
            }

            field.disabled = isLoading;
        }
    }
};