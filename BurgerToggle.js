const menuBtn = document.querySelector('.menu_btn');
const navUl = document.querySelector('.nav_ul');
const body = document.querySelector('body');

/* Main Toggle */
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navUl.classList.toggle('open');
    body.classList.toggle('open');
});