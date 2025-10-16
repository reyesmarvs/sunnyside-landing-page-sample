const navEl = document.querySelector('.header-menu-list');
const hamburgerEl = document.querySelector('.hamburger-icon');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('menu-open');
});

navEl.addEventListener('click', () => {
    navEl.classList.remove('menu-open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navEl.classList.remove('menu-open');
    }
});