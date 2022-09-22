const addButtonProduct = document.querySelectorAll('.slider__button-add');
const basketContainer = document.querySelector('.user-list__counter-container');
const basketCounter = document.querySelector('.user-list__counter-basket');

let counter = 0;


function counterProduct() {
  if(!basketContainer.classList.contains('user-list__counter-container--counter-product')) {
    basketContainer.classList.add('user-list__counter-container--counter-product');
  }
  counter += 1;
  basketCounter.textContent = counter;
}

addButtonProduct.forEach((item) => {
  item.addEventListener('click', counterProduct)
})

