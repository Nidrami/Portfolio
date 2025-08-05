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

// Enhanced scroll effect to navbar with animations
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 100;

    if (scrolled) {
        navbar.style.background = 'rgba(11, 15, 26, 0.98)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.transform = 'translateY(0) scale(0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(11, 15, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.transform = 'translateY(0) scale(1)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle with animations
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .experience-item, .achievement-item, .certificate-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Dynamic cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }

    const cursorElement = document.querySelector('.custom-cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .experience-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)';
            }
        });

        el.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)';
            }
        });
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');

    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Text typing animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing animation for job title
document.addEventListener('DOMContentLoaded', () => {
    const jobTitle = document.querySelector('.job-title');
    if (jobTitle) {
        const originalText = jobTitle.textContent;
        setTimeout(() => {
            typeWriter(jobTitle, originalText, 80);
        }, 4000);
    }
});

// Tech item interactions
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Add subtle rotation on hover
        item.style.transform = 'translateY(-8px) scale(1.02) rotateZ(1deg)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
    });

    // Click interaction
    item.addEventListener('click', () => {
        const tech = item.getAttribute('data-tech');
        showTechInfo(tech);
    });
});

// Show technology information (placeholder function)
function showTechInfo(tech) {
    const techInfo = {
        // Frameworks & Libraries
        'springboot': 'Spring Boot - Java framework for building enterprise applications',
        'react': 'React - JavaScript library for building user interfaces',
        'nodejs': 'Node.js - JavaScript runtime for server-side development',
        'symfony': 'Symfony - PHP framework for web applications',
        'django': 'Django - Python web framework for rapid development',

        // Databases
        'mysql': 'MySQL - Popular relational database management system',
        'postgresql': 'PostgreSQL - Advanced open-source relational database',
        'sqlite': 'SQLite - Lightweight embedded database engine',

        // Programming Languages
        'java': 'Java - Object-oriented programming language for enterprise applications',
        'python': 'Python - Versatile programming language for web, data science, and AI',
        'javascript': 'JavaScript - Dynamic programming language for web development',
        'typescript': 'TypeScript - Typed superset of JavaScript',
        'csharp': 'C# - Microsoft\'s object-oriented programming language',
        'cpp': 'C++ - High-performance programming language',
        'c': 'C - Low-level programming language for system programming',
        'php': 'PHP - Server-side scripting language for web development',
        'salesforce': 'Salesforce - Cloud-based CRM platform and development environment',

        // Tools & Platforms
        'git': 'Git - Distributed version control system for tracking changes',
        'docker': 'Docker - Platform for developing, shipping, and running applications',
        'vscode': 'VS Code - Lightweight but powerful source code editor',
        'intellij': 'IntelliJ IDEA - Integrated development environment for Java',
        'linux': 'Linux - Open-source operating system for development and servers'
    };

    // Create a simple modal or alert (you can enhance this)
    alert(techInfo[tech] || 'Technology information not available');
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.spiral-element, .particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Dynamic particle animation
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    setInterval(() => {
        if (particlesContainer.children.length < 8) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }
    }, 2000);
}

// Initialize dynamic particles
createFloatingParticles();

// Spiral element enhanced animation
document.addEventListener('DOMContentLoaded', () => {
    const spiralRings = document.querySelectorAll('.spiral-ring');
    
    spiralRings.forEach((ring, index) => {
        // Add individual hover effects
        ring.addEventListener('mouseenter', () => {
            ring.style.transform = `scale(1.1) rotateZ(${index * 45}deg)`;
            ring.style.borderColor = 'rgba(102, 126, 234, 0.8)';
        });
        
        ring.addEventListener('mouseleave', () => {
            ring.style.transform = 'scale(1) rotateZ(0deg)';
            ring.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced scroll-triggered animations
const scrollAnimations = {
    fadeInUp: (element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
    }
};

// Apply scroll animations to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.tech-item, .project-card, .education-item, .experience-item, .cert-category, .contact-link');

    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            scrollAnimations.fadeInUp(element);
        }, index * 100);
    });
});

// Cursor trail effect (optional cinematic enhancement)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX}px;
        top: ${mouseY}px;
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
}

// Add cursor trail CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes trailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(style);

// Create cursor trail on mouse move (throttled)
let trailTimeout;
document.addEventListener('mousemove', () => {
    if (!trailTimeout) {
        trailTimeout = setTimeout(() => {
            createCursorTrail();
            trailTimeout = null;
        }, 50);
    }
});
