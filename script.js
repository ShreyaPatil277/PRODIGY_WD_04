// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Alert for Email Click
const emailLink = document.querySelector('a[href="shreyagpatil2005@gmil.com"]');
if (emailLink) {
    emailLink.addEventListener('click', function(e) {
        alert("Opening your email client to contact Shreya Patil!");
    });
}
