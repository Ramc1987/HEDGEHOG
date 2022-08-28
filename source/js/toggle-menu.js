const toggleMenu = document.querySelector('.header__toggle-menu');
const mainNav = document.querySelector('.main-nav--open');


mainNav.classList.remove('main-nav--open');

toggleMenu.addEventListener('click', function() {
  toggleMenu.classList.toggle('open')
})

toggleMenu.addEventListener('click', function() {
  if(toggleMenu.classList.contains('open')) {
    mainNav.classList.toggle('main-nav--open')
  }else {
    mainNav.classList.remove('main-nav--open')
  }
})
