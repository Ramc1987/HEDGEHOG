const formSection = document.querySelector('.form-application');
const form = document.querySelector('.form-application__data');
const inputs = document.querySelectorAll('input[data-rule]');
const btnSubmit = document.querySelector('.form-application__button-buy');
const modal = document.querySelector('.modal-form');
const modalWindow = document.querySelectorAll('.modal-form__window');
const modalClose = document.querySelector('.modal-form__button-close');
const buttonBuy = document.querySelector('.card__button-buy');

function handleButtonclick() {
  formSection.scrollIntoView({
    block: 'start', inline: "nearest", behavior: "smooth"
  });
};

buttonBuy.addEventListener('click', handleButtonclick);

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
    }else {
      this.classList.add('invalid');
    }
  });
};

btnSubmit.addEventListener('click', function(evt) {
  inputs.forEach((item) => {
    if(!item.value) {
      btnSubmit.disabled = true;
      alert('заполните все поля');
    }else if(item.value) {
      btnSubmit.disabled = false;
      modal.classList.remove('modal-form--close');
    };
  });
})

const clearForm = function() {
  form.reset();
}

modalClose.addEventListener('click', function() {
  modal.classList.add('modal-form--close');
  clearForm();
});

