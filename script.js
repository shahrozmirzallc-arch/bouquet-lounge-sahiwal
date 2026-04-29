// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Form Submission
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData);
        
        // Create WhatsApp message
        const whatsappMessage = `
*New Order from Bouquet Lounge Website*

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🎉 Occasion: ${data.occasion}
💰 Budget: ${data.budget}
📝 Message: ${data.message}
        `.trim();
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Replace with actual WhatsApp number
        const whatsappNumber = '923001234567';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success message
        alert('Thank you! Redirecting to WhatsApp to complete your order.');
        
        // Reset form
        orderForm.reset();
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.occasion-card, .product-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});