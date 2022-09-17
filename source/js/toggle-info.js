const toggleBtn = document.querySelector('.slider__slide-info-btn');
const navbarCard = document.querySelector('.slider__slide-navbar');

function infoBtn() {
  toggleBtn.addEventListener('click', function() {
    navbarCard.style.transform = scale(1);
  })
}
