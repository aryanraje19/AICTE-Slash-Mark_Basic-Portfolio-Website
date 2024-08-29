document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add animation to project cards
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Typing effect for the About Me section
    const aboutMeText = document.querySelector('#about p');
    const text = aboutMeText.textContent;
    aboutMeText.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            aboutMeText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    typeWriter();

    // Scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #e8491d;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
    `;
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});