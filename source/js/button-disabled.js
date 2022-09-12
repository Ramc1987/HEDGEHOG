const fieldCheck = document.querySelectorAll('.data-client__input-field');
const btnSubmit = document.querySelector('.form-application__button-buy');

fieldCheck.forEach((item) => {
  item.addEventListener('input', function(event) {
    btnSubmit.disabled = (fieldCheck.value == '');
  })
})



// btnSubmit.addEventListener('click', function(){
//   btnSubmit.disabled = true;
//   // event.preventDefault();
//   fieldCheck.forEach((item) => {
//   if(item.value !== '') {
//     btnSubmit.disabled = false;
//   }
// });
// })
