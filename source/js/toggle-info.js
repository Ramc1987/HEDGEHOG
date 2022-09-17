const toggleBtn = document.querySelectorAll('.slider__slide-info-btn');
const navbarCard = document.querySelector('.slider__slide-navbar');

function infoBtn() {
  toggleBtn.forEach((item) => {
    item.addEventListener('click', function() {
    navbarCard.style.transform = 'scale(1)';
  })
  })
}
