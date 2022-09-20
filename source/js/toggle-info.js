const toggleBtn = document.querySelectorAll('.slider__slide-info-btn');
const navbarCard = document.querySelectorAll('.slider__slide-navbar');


toggleBtn.forEach((item, index) => {
  item.addEventListener('click', function() {
    if(navbarCard[index].classList.toggle('slider__slide-navbar--close')) {
      navbarCard[index].classList.remove('slider__slide-navbar--open')
    }else {
      navbarCard[index].classList.remove('slider__slide-navbar--open')
    }
  })
})

