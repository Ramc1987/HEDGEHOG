const catalogBtn = document.querySelector('.main-nav__item-link--catalog');
const itemHover = document.querySelector('.main-nav__item-hover');
const popupList = document.querySelector('.popup__list');


function openPopup() {
  if(popupList.classList.toggle('popup__list--close')) {
    itemHover.style.transform='rotate(0deg)';
    itemHover.style.left='-9px';
    popupList.classList.remove('popup__list--open');
  }else{
    itemHover.style.transform='rotate(90deg)';
    itemHover.style.left='-13px';
    popupList.classList.add('popup__list--open')
  }
};

catalogBtn.addEventListener('click', openPopup);
