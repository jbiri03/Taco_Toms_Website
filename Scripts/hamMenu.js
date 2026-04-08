const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.off-screen-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});