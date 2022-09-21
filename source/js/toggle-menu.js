const toggleMenu = document.querySelector('.header__toggle-menu');
const mainNav = document.querySelector('.main-nav');


function openMobMenu() {
  if(mainNav.classList.toggle('main-nav--close')) {
    mainNav.classList.remove('main-nav--open')
  }else {
    mainNav.classList.add('main-nav--open')
  }
}

toggleMenu.addEventListener('click', openMobMenu)

export { openMobMenu }
