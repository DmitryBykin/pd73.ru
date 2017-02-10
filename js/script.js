var menuBtn = document.querySelector('.nav__btn');
var menuItems = document.querySelector('.nav__items');

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