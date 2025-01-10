// Certificates page interactivity can be added here if required in the future
console.log("Certificates page loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) {
        console.error('Menu elements not found');
        return;
    }

    menuToggle.addEventListener('click', function() {
        console.log('Menu clicked'); // For debugging
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});
