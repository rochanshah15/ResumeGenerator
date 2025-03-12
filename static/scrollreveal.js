const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
});

// Hero Section
sr.reveal('.homepage-banner .banner-text', { delay: 500, origin: 'top' });
sr.reveal('.homepage-banner .banner-image', { delay: 700, origin: 'right' });

// Navbar & Buttons
sr.reveal('.navbar', { delay: 100, origin: 'top' });
sr.reveal('.btn-container button', { delay: 200, interval: 200, origin: 'top' });

// Resume Carousel
sr.reveal('.carousel-container', { delay: 600, origin: 'top' });

// FAQ Section
sr.reveal('#ai-faqs h1', { delay: 400, origin: 'top' });
sr.reveal('#ai-faqs p', { delay: 500, origin: 'bottom' });
sr.reveal('#ai-faqs button', { delay: 700, origin: 'bottom' });

// Steps Section
sr.reveal('.steps .section-title', { delay: 400, origin: 'top' });
sr.reveal('.steps-item', { delay: 500, interval: 300, origin: 'bottom' });

// Flip Card Section
sr.reveal('.flip_text .header-text', { delay: 400, origin: 'left' });
sr.reveal('.flip_text .button-group', { delay: 600, origin: 'bottom' });
// sr.reveal('.flippable-card', { delay: 500, origin: 'right' });

// Templates Section
sr.reveal('.templates .section-title', { delay: 400, origin: 'top' });
sr.reveal('.templates-item', { delay: 500, interval: 300, origin: 'bottom' });

// Footer Section
sr.reveal('.footer-section .site-logo', { delay: 400, origin: 'left' });
sr.reveal('.footer-section .text-grey', { delay: 500, origin: 'right' });
sr.reveal('.footer-section ul li', { delay: 600, interval: 200, origin: 'bottom' });
sr.reveal('.footer-section .social-icons a', { delay: 700, interval: 200, origin: 'bottom' });
  