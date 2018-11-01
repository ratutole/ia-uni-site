const time = 300;

// Variables navbar
const MENU = document.querySelector('.nav-toggler');
const MENUITEMS = document.querySelector('.mobile-nav');
const COVER = document.querySelector('.cover');

// Variables research slider - Carusels
const CARUSELS = document.querySelectorAll('.carusel');
const CARUSELSELECTORS = document.querySelectorAll('.carusel-selectors i');

// Variables ug-pg
const BTNUG = document.querySelector('.btn-clr');
const BTNPG = document.querySelector('.btn-clr2');

const UGHD = document.querySelector('.undergraduate');
const PGHD = document.querySelector('.postgraduate');

const UG = document.querySelector('.ug');
const PG = document.querySelector('.pg');

// Variables search bar
const SBAR = document.querySelector('.toggle-search');
const SBTN = document.querySelector('.searchbar');


// variables dynamic text
const PARA = document.querySelector('main p');

// Functions *****************************
var dynamicText = function(){
  var text = document.createTextNode(' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit alias  reiciendis aliquam sint. Voluptate, quos earum.');

  PARA.appendChild(text);

};

// var changeColor  = function(grad,btn){
//   grad.addEventListener('mouseover',function(){
//     this.style.backgroundColor = '#502174';
//     btn.style.color = '#502174';
    
//   });
//   grad.addEventListener('mouseleave',function(){
//     this.style.backgroundColor ='rgba(255,255,255,0.15)';
//     btn.style.color = 'black';
//   });
// };

// Change color on grad-buttons
// var changeColorBtn  = function(grad,btn){
//   btn.addEventListener('mouseover',function(){
//     grad.style.backgroundColor = '#502174';
//     this.style.color = '#502174';
    
//   });
//   btn.addEventListener('mouseleave',function(){
//     grad.style.backgroundColor ='rgba(255,255,255,0.15)';
//     this.style.color = 'black';
//   });
// };

var changeColor = function(){
  PG.addEventListener('mouseover',function(){
        PGHD.style.backgroundColor = '#502174';
        BTNPG.style.color = '#502174';
      });
  PG.addEventListener('mouseleave',function(){
    PGHD.style.backgroundColor ='rgba(255,255,255,0.15)';
    BTNPG.style.color = 'black';
  });
  UG.addEventListener('mouseover',function(){
        UGHD.style.backgroundColor = '#502174';
        BTNUG.style.color = '#502174';
      });
  UG.addEventListener('mouseleave',function(){
    UGHD.style.backgroundColor ='rgba(255,255,255,0.15)';
    BTNUG.style.color = 'black';
  });
};

//Check for width to change color of ug-pg
var screenBreak = function(){
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  const targetWidth = 767;
  const targetWidth2 = 1079;
  if ( w >= targetWidth) {     
    //Add your javascript for screens wider than or equal to 768 here
      // changeColor(UGHD,BTNUG);
      // changeColor(PGHD,BTNPG);
      
      // changeColorBtn(UGHD,BTNUG);
      // changeColorBtn(PGHD,BTNPG);
      // console.log('greater than 767');
      changeColor();
    }
    else {
      // console.log('less than 767');
    }

    if(w >= targetWidth2){
      dynamicText();
    }
  // 
};

// Responsive Navigation
MENU.addEventListener('click', function () {
  MENUITEMS.classList.toggle('menu-hidden');
  COVER.classList.toggle('cover-bg');
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

COVER.addEventListener('click',function(){
    this.classList.toggle('cover-bg');
    MENUITEMS.classList.toggle('menu-hidden');
});


// Search bar ******************


SBTN.addEventListener('click',function(){
  SBAR.classList.toggle('active');
});


// UG PG color change grad-header
screenBreak();

// ************Search Bar end

// Carusel Slider
const reset = function () {
  for (var i = 0; i < CARUSELS.length; i++) {
    CARUSELS[i].classList.add('invisible');
    // CARUSELS[i].classList.remove('visible');
    // CARUSELS[i].style.display = 'none';
  }
};


var startCarousel = function () {
  reset();
  // CARUSELS[0].style.display = 'block';
  CARUSELS[0].classList.remove('invisible');
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
      CARUSELS[current].classList.remove('invisible');
      this.className = this.className.replace('far','fas');
    });
  }
};

all();

