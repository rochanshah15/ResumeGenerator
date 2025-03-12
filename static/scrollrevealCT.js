document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: "60px",
        duration: 1000,
        delay: 300,
        // easing: "ease-in-out",
    });

    // Navbar
    // sr.reveal(".navbar", { origin: "top", delay: 200 });

    // Hero Section
    sr.reveal(".hero-section h1", { origin: "top", delay: 300 });
    sr.reveal(".hero-section p", { origin: "bottom", delay: 400 });

    // Contact Section
    sr.reveal("h2.text-primary", { origin: "top", delay: 400 });
    sr.reveal(".contact-card", { origin: "left", interval: 200, delay: 300 });

    // Locations Section
    sr.reveal(".location-card", { origin: "bottom", interval: 300, delay: 400 });

    // Chat Section
    sr.reveal(".chat-section", { origin: "bottom", delay: 500 });

    // Contact Form
    sr.reveal(".contact-form", { origin: "right", delay: 500 });

    // FAQ Section
    sr.reveal(".accordion-item", { origin: "bottom", interval: 300, delay: 400 });

    // Statistics Section
    sr.reveal(".stat-counter", { origin: "left", interval: 300, delay: 400 });

    // Testimonials Section
    sr.reveal(".testimonial", { origin: "bottom", interval: 300, delay: 500 });

    // Social Media Section
    sr.reveal(".social-icons a", { origin: "top", interval: 200, delay: 500 });

    // Footer Section
    sr.reveal(".footer-section .site-logo", { origin: "left", delay: 400 });
    sr.reveal(".footer-section .text-grey", { origin: "right", delay: 500 });
    sr.reveal(".footer-section ul li", { origin: "bottom", interval: 200, delay: 600 });
});
