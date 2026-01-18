// Script for navbar functionality

document.addEventListener('DOMContentLoaded', function() {
    // Update active nav link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const coffeeLink = document.querySelector('.coffee-link');

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');

        // Add active class to current page link
        if (link.getAttribute('href') === currentPath ||
            (currentPath.includes('index.html') && link.getAttribute('href') === 'index.html') ||
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Handle coffee link separately
    if (coffeeLink) {
        coffeeLink.classList.remove('active');
        if (currentPath.includes('coffee')) {
            coffeeLink.classList.add('active');
        }
    }

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to coffee link
    const coffeeLink = document.querySelector('.coffee-link');

    if (coffeeLink) {
        coffeeLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        coffeeLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Rotating text effect - different content based on page
    const rotateTextElement = document.querySelector('.rotate-text');

    if (rotateTextElement) {
        let rotateTexts = [];

        // Determine which page we're on and set appropriate rotating text
        if (currentPath === '/' || currentPath === '/index.html') {
            rotateTexts = [
                'KitTheKat',
                'a Developer',
                'a Coder',
                'an Engineer',
                'a Problem Solver'
            ];
        } else if (currentPath.includes('/projects')) {
            rotateTexts = [
                'Projects',
                'Creations',
                'Developments',
                'Innovations',
                'Solutions'
            ];
        } else if (currentPath.includes('/blog')) {
            rotateTexts = [
                'Blog',
                'Articles',
                'Thoughts',
                'Insights',
                'Updates'
            ];
        } else if (currentPath.includes('/coffee')) {
            rotateTexts = [
                'Coffee',
                'Support',
                'Fuel',
                'Energy',
                'Thanks'
            ];
        }

        let currentIndex = 0;

        function rotateText() {
            // Fade out current text
            rotateTextElement.style.transition = 'opacity 0.5s ease-in-out';
            rotateTextElement.style.opacity = 0;

            setTimeout(() => {
                // Change text after fade out
                currentIndex = (currentIndex + 1) % rotateTexts.length;
                rotateTextElement.textContent = rotateTexts[currentIndex];

                // Fade in new text
                rotateTextElement.style.opacity = 1;
            }, 500); // Half of the transition time
        }

        // Start the rotation after initial load if we have rotating texts
        if (rotateTexts.length > 0) {
            setTimeout(() => {
                setInterval(rotateText, 3000); // Change text every 3 seconds
            }, 1800); // Wait for initial fade-in to complete (0.5s delay + 0.8s animation + buffer)
        }
    }
});