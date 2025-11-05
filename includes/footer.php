   <!-- Footer CTA -->
    <footer class="min-h-screen py-12 sm:py-24 bg-white text-black text-center flex items-center justify-center">
        <div class="container mx-auto px-4 sm:px-6 w-full" data-aos="zoom-in">
            <h2 class="custom-h2">No Signups, Completely Free</h2>
            <p class="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600">Get started right away and see the power of AI-driven brand strategy.</p>
            <a href="/form" id="get-started-free" class="mt-6 sm:mt-8 inline-block bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-gray-700 transition-transform transform hover:scale-105">Get Started Free</a>
        </div>
    </footer>

    <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
        });

        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;
        let ticking = false;
        const headerScrollThreshold = 120;

        const toggleHeaderAppearance = (isScrolled) => {
            if (isScrolled) {
                header.classList.add('header-solid');
                header.classList.remove('header-transparent');
            } else {
                header.classList.add('header-transparent');
                header.classList.remove('header-solid');
            }
        };

        const updateHeaderVisibility = () => {
            const currentScrollY = window.scrollY;
            toggleHeaderAppearance(currentScrollY > headerScrollThreshold);

            if (currentScrollY > headerScrollThreshold) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    header.style.transform = 'translateY(-100%)';
                    header.style.opacity = '0';
                    header.style.pointerEvents = 'none';
                } else {
                    // Scrolling up
                    header.style.transform = 'translateY(0)';
                    header.style.opacity = '1';
                    header.style.pointerEvents = 'auto';
                }
            } else {
                // Near the top
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
                header.style.pointerEvents = 'auto';
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeaderVisibility);
                ticking = true;
            }
        });

        toggleHeaderAppearance(window.scrollY > headerScrollThreshold);
        updateHeaderVisibility();

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
        const menuOpenIcon = document.getElementById('menu-open-icon');
        const menuCloseIcon = document.getElementById('menu-close-icon');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBackdrop.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', mobileMenuButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBackdrop.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking on backdrop
        mobileMenuBackdrop.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBackdrop.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        });

        // Fix for animations on page load
        window.addEventListener('load', () => {
            const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left');
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 100 * index);
            });
        });
    </script>
</body>
</html>
