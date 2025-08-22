// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .timeline-item, .contact-item, .section-title'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.btn');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Reset form labels
            document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
                input.value = '';
            });
        }, 1500);
    });
}

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero subtitle
// Typing animation for rotating hero subtitles
const subtitles = [
    "Software Developer",
    "Financial App Developer",
    "Problem Solver"
];

const subtitleElement = document.querySelector('.hero-subtitle');
let subtitleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const pauseBetweenWords = 1000;

function typeSubtitles() {
    const currentText = subtitles[subtitleIndex];

    // Adjust typing/deleting
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Update text content
    subtitleElement.textContent = currentText.substring(0, charIndex);

    // Switching logic
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeSubtitles, pauseBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        setTimeout(typeSubtitles, 100);
    } else {
        setTimeout(typeSubtitles, isDeleting ? 50 : typingSpeed);
    }
}

// Start typing when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (subtitleElement) {
        setTimeout(typeSubtitles, 120); // Initial delay
    }
});

// Parallax effect for hero section
/*window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});*/

// Add click handlers for project links (demo purposes)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = link.textContent.trim();
        
        if (linkText.includes('Demo')) {
            alert('Demo link clicked! In a real portfolio, this would open the live project.');
        } else if (linkText.includes('Code')) {
            alert('Code link clicked! In a real portfolio, this would open the GitHub repository.');
        }
    });
});

// Add hover effect to timeline items
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Console welcome message
console.log('🚀 Welcome to Josiah James\'s Portfolio!');
console.log('💼 Built with HTML, CSS, and JavaScript');
console.log('📧 Contact: siahjames@outlook.com');