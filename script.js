// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

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
        }
    });
});

// WhatsApp Form Submission
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const occasion = document.querySelector('select[name="occasion"]').value;
    const budget = document.querySelector('select[name="budget"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    // Format WhatsApp message
    const whatsappMessage = `
🌸 *New Order from Bouquet Lounge Website* 🌸

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🎉 *Occasion:* ${occasion.charAt(0).toUpperCase() + occasion.slice(1)}
💰 *Budget:* ${budget}
📝 *Message:* ${message}

_Sent from bouquet-lounge.vercel.app_
    `.trim();
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (replace with actual number)
    const whatsappNumber = '923001234567'; // Update this with actual number
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    orderForm.reset();
    
    // Show success message
    alert('✅ Redirecting to WhatsApp! Your order details are ready to send.');
});

// Scroll Animation for Cards
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

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.occasion-card, .product-card, .info-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add floating animation to hero
const hero = document.querySelector('.hero-content h1');
if (hero) {
    setInterval(() => {
        hero.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            hero.style.transform = 'translateY(0)';
        }, 500);
    }, 2000);
}