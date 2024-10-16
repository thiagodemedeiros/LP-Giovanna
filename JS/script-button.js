document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll-to').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetClass = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetClass);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});