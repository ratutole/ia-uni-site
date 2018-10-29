// Variables navbar
const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');

// Variables research slider
const CARUSELS = document.querySelectorAll('.carusel');
const CARUSELSELECTORS = document.querySelectorAll('.carusel-selectors i');

// Variables ug-pg
const BTNUG = document.querySelector('.btn-clr');
const BTNPG = document.querySelector('.btn-clr2');

const UGHD = document.querySelector('.undergraduate');
const PGHD = document.querySelector('.postgraduate');


// Functions *****************************
var changeColor  = function(grad,btn){
  grad.addEventListener('mouseover',function(){
    this.style.backgroundColor = '#502174';
    btn.style.color = '#502174';
    
  });
  grad.addEventListener('mouseleave',function(){
    this.style.backgroundColor ='rgba(255,255,255,0.15)';
    btn.style.color = 'black';
  });
};

// Change color on grad-buttons
var changeColorBtn  = function(grad,btn){
  btn.addEventListener('mouseover',function(){
    grad.style.backgroundColor = '#502174';
    this.style.color = '#502174';
    
  });
  btn.addEventListener('mouseleave',function(){
    grad.style.backgroundColor ='rgba(255,255,255,0.15)';
    this.style.color = 'black';
  });
};

// Responsive Navigation
MENU.addEventListener('click', function () {
  MENUITEMS.classList.toggle('menu-hidden');
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});


// UG PG color change grad-header
changeColor(UGHD,BTNUG);
changeColor(PGHD,BTNPG);

changeColorBtn(UGHD,BTNUG);
changeColorBtn(PGHD,BTNPG);
// 

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

