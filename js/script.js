
// Variables navbar
const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');

// Variables research slider
const CARUSELS = document.querySelectorAll('.carusel');

// Responsive Navigation
MENU.addEventListener('click', function(){
    MENUITEMS.classList.toggle('menu-hidden');
});

