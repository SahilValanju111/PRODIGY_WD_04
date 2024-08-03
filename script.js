// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update footer year dynamically
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('footer p span.year');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
});
