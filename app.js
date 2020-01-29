const fname = document.querySelector('#first-name')
const lname = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const fnameError = document.querySelector('#fname-error')
const lnameError = document.querySelector('#lname-error')
const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')

const validateEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
  return reg.test(email)
}

const validateInput = (input, error) => {
  if (input.value === "" || input.id === 'email' && validateEmail(input.value) === false) {
    input.style.borderColor = '#ff7a7a'
    error.style.display = 'block'
  }
  else {
    input.style.borderColor = "#ddd"
    error.style.display = 'none'
  }
}

document.querySelector('.form__button').addEventListener('click', e => {
  e.preventDefault()
  validateInput(fname, fnameError)
  validateInput(lname, lnameError)
  validateInput(password, passwordError)
  validateInput(email, emailError)
})