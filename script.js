document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        if (scrollTop > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // Privacy Modal
    const openPrivacy = document.getElementById('open-privacy');
    const closePrivacy = document.getElementById('close-privacy');
    const modalBg = document.getElementById('close-modal-bg');
    const modal = document.getElementById('privacy-modal');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    if(openPrivacy) openPrivacy.addEventListener('click', toggleModal);
    if(closePrivacy) closePrivacy.addEventListener('click', toggleModal);
    if(modalBg) modalBg.addEventListener('click', toggleModal);
});