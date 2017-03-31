try {
  var menuBtn = document.querySelector('.nav__btn');
  var menuItems = document.querySelector('.nav__items');
  var feedbackCallMeButton = document.querySelector('.nav__feedback--callme');
  var feedbackContainer = document.querySelector('.feedback');
  var feedbackBtnClose = document.querySelector('.feedback__btn--close');
  var body = document.querySelector('body');
} catch(e){}

if(menuBtn) {
  // меню по умолчанию открыто, если js включен, то меню закроется
  if(menuBtn.classList.contains('nav__btn--close')) {
    menuBtn.classList.remove('nav__btn--close');
    menuBtn.classList.add('nav__btn--hamburger');
    menuItems.classList.add('nav__items--hidden');
  }

  menuBtn.addEventListener("click", function (event) {
    if(menuBtn.classList.contains('nav__btn--close')) {
      menuBtn.classList.remove('nav__btn--close');
      menuBtn.classList.add('nav__btn--hamburger');
      menuItems.classList.add('nav__items--hidden');
    }
    else {
      menuBtn.classList.remove('nav__btn--hamburger');
      menuBtn.classList.add('nav__btn--close');
      menuItems.classList.remove('nav__items--hidden');
    }
  });
}

if(feedbackCallMeButton) {
  feedbackCallMeButton.addEventListener("click", function (event) {
    if(feedbackContainer.classList.contains('feedback--hidden')) {
      feedbackContainer.classList.remove('feedback--hidden');
      body.classList.add('overlay');
    }
  });
}

if(feedbackBtnClose) {
  feedbackBtnClose.addEventListener("click", function (event) {    
      if(!feedbackContainer.classList.contains('feedback--hidden')){
        feedbackContainer.classList.add('feedback--hidden');
        body.classList.remove('overlay');
      };    
  });
}
window.addEventListener("keydown", function(event){
  if(event.keyCode === 27){    
    if(!feedbackContainer.classList.contains('feedback--hidden')){
      feedbackContainer.classList.add('feedback--hidden');
      body.classList.remove('overlay');
    }; 
  }
});