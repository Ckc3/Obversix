

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


document.addEventListener('mouseenter', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if (e.target && e.target.matches) {
        if (e.target.matches('a, button, .logo-img, .feature-card, .product-image')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)';
        }
    }
}, true);

document.addEventListener('mouseleave', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if (e.target && e.target.matches) {
        if (e.target.matches('a, button, .logo-img, .feature-card, .product-image')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)';
        }
    }
}, true);


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


document.addEventListener('mousemove', (e) => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && heroSubtitle) {
        const rect = heroTitle.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        heroTitle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        heroSubtitle.style.transform = `perspective(1000px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`;
    }
});


document.querySelector('.hero-content').addEventListener('mouseleave', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    heroTitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    heroSubtitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});


document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.element');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    elements.forEach((element, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        element.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
    });
});


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '2px solid rgba(139, 92, 246, 0.7)';
        navbar.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.borderBottom = '2px solid rgba(139, 92, 246, 0.5)';
        navbar.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.2)';
    }
});
