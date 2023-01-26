
const btnSubmit = document.getElementById('btn-submit');
const inputEmail = document.getElementById('email');


function validateEmail(email) {
  if (email.value === '') {
    inputEmail.style.border = '1px solid red';
      alert('Please enter a valid email address');
  }
}

btnSubmit.addEventListener('click', validateEmail(inputEmail))