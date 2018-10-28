
// Variables navbar
const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');

// Variables research slider
const CARUSELS = document.querySelectorAll('.carusel');
const CS1 = document.querySelector('#cr-i1');
const CS2 = document.querySelector('#cr-i2');
const CS3 = document.querySelector('#cr-i3');





// Responsive Navigation
MENU.addEventListener('click', function(){
    MENUITEMS.classList.toggle('menu-hidden');
});

// Carusel Slider
var reset = function(){
    for(var i=0; i<CARUSELS.length; i++){
      CARUSELS[i].style.display = 'none';
    }
  };

var resetButtons = function(){

};
  
  
  var startCarousel = function(){
    reset();
    CARUSELS[0].style.display = 'block';
  };

  startCarousel();//starting carusel
  
//CARUSELS event listeners
  CS1.addEventListener('click',function(e){
    reset();
    CARUSELS[0].style.display = 'block';
  });
  CS2.addEventListener('click',function(e){
    reset();
    CARUSELS[1].style.display = 'block';
  });
  CS3.addEventListener('click',function(e){
    reset(); 
    CARUSELS[2].style.display = 'block';
  });
  
  // active carusel listeners
 