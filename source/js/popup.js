const catalogBtn = document.querySelector('.main-nav__item-link--catalog')
const popupList = document.querySelector('.popup__list');


function openPopup() {
  if(popupList.classList.toggle('popup__list--close')) {
    popupList.classList.remove('popup__list--open')
  }else{
    popupList.classList.add('popup__list--open')
  }
}

catalogBtn.addEventListener('click', openPopup);
