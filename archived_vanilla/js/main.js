document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // 1. Intersection Observer for Scroll Animations
    // -----------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'in-view' class to trigger animation
                entry.target.classList.add('in-view');
                
                // If it's the specific How It Works section, we might want to trigger child animations specifically
                if (entry.target.classList.contains('how-it-works-section')) {
                    const arrows = entry.target.querySelectorAll('.connecting-arrow');
                    arrows.forEach((arrow, index) => {
                        setTimeout(() => {
                            arrow.classList.add('animate');
                        }, index * 300); // Stagger arrow animations
                    });
                }

                // Unobserve after animation if we only want it to happen once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observe all elements with the 'fade-up' class
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});
