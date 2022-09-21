import { openMobMenu } from './toggle-menu';

const formSection = document.querySelector('.form-application');
const form = document.querySelector('.form-application__data');
const inputs = document.querySelectorAll('input[data-rule]');
const btnSubmit = document.querySelector('.form-application__button-buy');
const modal = document.querySelector('.modal-form');
const modalWindow = document.querySelector('.modal-form__window');
const modalClose = document.querySelector('.modal-form__button-close');
const buttonBuy = document.querySelector('.card__button-buy');


btnSubmit.disabled = true;

//скролит по нажатию на кнопку КУПИТЬ к форме покупки
function handleButtonclick() {
  formSection.scrollIntoView({
    block: 'start', inline: "nearest", behavior: "smooth"
  });
};

buttonBuy.addEventListener('click', handleButtonclick);


//блокирует отправку формы
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
});


for(let input of inputs) {
  input.addEventListener('input', function() {

  let rule = this.dataset.rule;
  let value = this.value;
  let check;

    switch (rule) {
      case 'name':
        check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(value);
      break;
      case 'number':
        check = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
      break;
      case 'email':
        check = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(value);
      break;
      case 'comment':
        check = true;
      break;
    }


    this.classList.remove('invalid');
    this.classList.remove('valid');

    if(check) {
      this.classList.add('valid');
      btnSubmit.disabled = false;
    }else {
      this.classList.add('invalid');
      btnSubmit.disabled = true;
    }

    if(!checkInputs() && check===true){
      btnSubmit.disabled = true;
    }
  });
};

function checkInputs() {
  for(let i = 0; i < inputs.length; i++) {
    if(!inputs[i].value) {
      return false;
    }
  }
  return true
}

btnSubmit.addEventListener('click', function(evt) {
  modal.classList.remove('modal-form--close');
})

const clearForm = function() {
  form.reset();
}

modal.addEventListener('click', function(event) {
  modal.classList.add('modal-form--close');
  clearForm();
})

modalWindow.addEventListener('click', function(event) {
  event.stopPropagation();
})

modalClose.addEventListener('click', function() {
  modal.classList.add('modal-form--close');
  clearForm();
});


toggleMenu.addEventListener('click', openMobMenu)
