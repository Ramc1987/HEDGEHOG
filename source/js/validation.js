const form = document.querySelector('.form-application__data');
const inputs = document.querySelectorAll('input[data-rule]');
const btnSubmit = document.querySelector('.form-application__button-buy');


for(let input of inputs) {
  input.addEventListener('blur', function() {

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
      // case 'coment':
      //   check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(value);
      // break;
    }

    this.classList.remove('invalid');
    this.classList.remove('valid');

    if(check) {
      this.classList.add('valid');
    }else {
      this.classList.remove('invalid');
    }
  });
};



form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let value = this.value;
  let check;

  if(check.valueOf) {
    alert('заполните все поля');

    return;
  }

  this.submit();
})
