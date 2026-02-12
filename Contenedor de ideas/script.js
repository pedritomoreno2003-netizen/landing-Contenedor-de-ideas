// =====================================================
// CONTENEDOR DE IDEAS - JAVASCRIPT INTERACTIONS
// =====================================================

// =====================================================
// PARTICLES SYSTEM
// =====================================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================

function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// =====================================================
// ANIMATED COUNTER
// =====================================================

function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// =====================================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// =====================================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Trigger counter animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat));

    // Observe cards with stagger effect
    const cards = document.querySelectorAll('.glass-card, .service-card-flip, .showcase-card, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        observer.observe(card);

        // Add stagger animation
        setTimeout(() => {
            if (card.classList.contains('animate-in')) {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        }, index * 100);
    });
}

// =====================================================
// MOBILE FLIP CARDS (TAP TO FLIP)
// =====================================================

function setupMobileFlipCards() {
    if (window.innerWidth <= 767) {
        const flipCards = document.querySelectorAll('.service-card-flip');

        flipCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    }
}

// =====================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================

function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================================================
// DEBOUNCE UTILITY
// =====================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// PARALLAX EFFECT (SUBTLE)
// =====================================================

function setupParallax() {
    const parallaxElements = document.querySelectorAll('.sphere, .about-image-placeholder');

    const handleParallax = debounce(() => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 10);

    window.addEventListener('scroll', handleParallax);
}

// =====================================================
// LAZY LOAD OPTIMIZATION
// =====================================================

function setupLazyLoad() {
    // Add will-change property to animated elements when they're about to animate
    const animatedElements = document.querySelectorAll('.service-card-flip, .glass-card');

    animatedElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.willChange = 'transform';
        });

        element.addEventListener('mouseleave', () => {
            element.style.willChange = 'auto';
        });
    });
}

// =====================================================
// INITIALIZE ALL FUNCTIONS
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();

    // Setup navbar scroll effect
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
    handleNavbarScroll(); // Check initial state

    // Setup mobile menu
    setupMobileMenu();

    // Setup scroll animations
    setupScrollAnimations();

    // Setup mobile flip cards
    setupMobileFlipCards();

    // Setup smooth scroll
    setupSmoothScroll();

    // Setup parallax (optional, can be disabled for performance)
    // setupParallax();

    // Setup lazy load optimization
    setupLazyLoad();

    // Setup contact form modal
    setupContactModal();

    // Log initialization
    console.log('🚀 Contenedor de Ideas - Landing Page Initialized');
});

// =====================================================
// CONTACT FORM MODAL
// =====================================================

function setupContactModal() {
    const modal = document.getElementById('contactModal');
    const openButtons = document.querySelectorAll('a[href="#contacto"]');
    const closeButton = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const formErrorMessage = document.getElementById('formErrorMessage');
    const btnRetry = document.getElementById('btnRetry');

    // Open modal when clicking "Impulsa tu negocio" or "Contactar" buttons
    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Only open modal for buttons with specific text
            const buttonText = button.textContent.trim();
            if (buttonText.includes('Impulsa') || buttonText.includes('Contactar') || buttonText.includes('Contacto') || buttonText.includes('Solicitar')) {
                e.preventDefault();
                openModal();
            }
        });
    });

    // Close modal when clicking close button
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit();
    });

    // Handle retry button
    if (btnRetry) {
        btnRetry.addEventListener('click', (e) => {
            e.preventDefault();
            formError.classList.remove('active');
            // Form is hidden by CSS when error is active, so removing 'active' shows form again
        });
    }

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll

        // Ensure inputs are interactable
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.userSelect = 'text';
            input.style.pointerEvents = 'auto';
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll

        // Reset form after closing
        setTimeout(() => {
            contactForm.reset();
            formSuccess.classList.remove('active');
            if (formError) formError.classList.remove('active');
        }, 300);
    }

    function handleFormSubmit() {
        // Get form data dynamically
        const rawFormData = new FormData(contactForm);
        const data = {};

        // Convert FormData to object for easier manipulation/logging
        rawFormData.forEach((value, key) => {
            if (!data[key]) {
                data[key] = value;
            } else {
                // Handle multiple values for same key (like checkboxes)
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            }
        });

        // Add additional context
        data.timestamp = new Date().toISOString();
        data.source = 'Campaña Kit Digital'; // Ahora es la página principal
        if (!data.subject) data.subject = 'Contacto Kit Digital';

        // Get submit button
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.innerHTML;

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.25"/>
                <path d="M10 2 A 8 8 0 0 1 18 10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
            Enviando...
        `;

        // Create the form body for the request
        const formBody = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
            if (Array.isArray(value)) {
                value.forEach(v => formBody.append(key, v));
            } else {
                formBody.append(key, value);
            }
        }

        // Send data to n8n webhook
        fetch('https://n8n.ufxbwh.easypanel.host/webhook-test/f0cda06d-a8d3-441e-8b2e-c733abe83530', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        })
            .then(response => {
                // With no-cors, we get an "opaque" response (status 0, ok false)
                // But the request WAS sent successfully and n8n received it.
                console.log('✅ Formulario enviado (modo no-cors):', formData);

                // Show success message immediately
                formSuccess.classList.add('active');

                // Auto-close modal after 3 seconds
                setTimeout(() => {
                    closeModal();
                }, 3000);

                // Restore button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            })
            .catch(error => {
                console.error('❌ Error al enviar formulario:', error);

                // En caso de error real de red, mostramos alerta
                alert('Hubo un error de conexión. Inténtalo de nuevo.');

                // Restore button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });
    }
}

// Add spin animation for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// =====================================================
// RESIZE HANDLER
// =====================================================

window.addEventListener('resize', debounce(() => {
    // Reinitialize mobile flip cards on resize
    setupMobileFlipCards();

    // Recreate particles if needed
    const particlesContainer = document.getElementById('particles');
    const currentParticleCount = particlesContainer.children.length;
    const targetParticleCount = window.innerWidth < 768 ? 20 : 50;

    if (currentParticleCount !== targetParticleCount) {
        particlesContainer.innerHTML = '';
        createParticles();
    }
}, 250));

// =====================================================
// PERFORMANCE MONITORING (OPTIONAL)
// =====================================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}
