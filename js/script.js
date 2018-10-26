const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');

MENU.addEventListener('click', function(){
    MENUITEMS.classList.toggle('menu-hidden');
});