// Variables navbar
const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');

// Variables research slider
const CARUSELS = document.querySelectorAll('.carusel');
const CARUSELSELECTORS = document.querySelectorAll('.carusel-selectors i');


// const CS1 = document.querySelector('#cr-i1');
// const CS2 = document.querySelector('#cr-i2');
// const CS3 = document.querySelector('#cr-i3');

// Responsive Navigation
MENU.addEventListener('click', function () {
  MENUITEMS.classList.toggle('menu-hidden');
});

// Carusel Slider
const reset = function () {
  for (var i = 0; i < CARUSELS.length; i++) {
    CARUSELS[i].style.display = 'none';
  }
};

// var resetButtons = function(){

// };

var startCarousel = function () {
  reset();
  CARUSELS[0].style.display = 'block';
};

startCarousel(); //starting carusel

const uncheck = function(){
  for(var j=0; j<CARUSELSELECTORS.length; j++){
    CARUSELSELECTORS[j].className = CARUSELSELECTORS[j].className.replace('fas','far');
  }
};

var all = function(){
  for(var i=0; i<CARUSELSELECTORS.length; i++){
      const current = i;
      CARUSELSELECTORS[current].addEventListener('click', function(){
      uncheck();
      reset();
      CARUSELS[current].style.display = 'block';
      this.className = this.className.replace('far','fas');
    });
  }
};

all();

