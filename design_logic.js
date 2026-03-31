/**
 * Professional Website Design Logic
 * Handles interactive navigation and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const revealElements = document.querySelectorAll('[data-reveal]');

    // 1. Scroll Effect for Navigation
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    // 2. Reveal Logic using Intersection Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Reveal when 10% of the element is visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Initialize
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
});
