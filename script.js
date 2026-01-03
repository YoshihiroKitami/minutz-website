// Common JavaScript for Minutz Website

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo-img');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.remove('bg-transparent', 'py-5');
            } else {
                header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.add('bg-transparent', 'py-5');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});
