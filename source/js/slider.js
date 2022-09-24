const buttonPrev = document.querySelector('.slider__button-prev');
const buttonNext = document.querySelector('.slider__button-next');
const slides = document.querySelectorAll('.slider__slide');

buttonPrev.addEventListener('click', function() {
  slides.forEach((item, index) => {
    if(slides[index] > [index])
    item.style.left='-630px';
  })
})

buttonNext.addEventListener('click', function() {
  slides.forEach((item, index) => {
    if(slides[index] > [index])
    item.style.left='630px';
  })
})




