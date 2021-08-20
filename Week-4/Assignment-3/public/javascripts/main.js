const signInBtn = document.querySelector('button.js-sign-in')
const signUpBtn = document.querySelector('button.js-sign-up')
const signinFailMsg = document.querySelector('.js-sign-in-fail-msg')
const signupFailMsg = document.querySelector('.js-sign-up-fail-msg')
signinFailMsg.innerText = '' // Reset inner content
signupFailMsg.innerText = '' // Reset inner content
const signInForm = document.querySelector('.js-sign-in-form')
const signUpForm = document.querySelector('.js-sign-up-form')
const formatAlert = document.querySelector('.format-alert')


signInBtn.addEventListener('click', () => {
  const email = document.querySelector('.js-sign-in-email-input').value.toLowerCase()
  const password = document.querySelector('.js-sign-in-password-input').value

  // Check if the form is empty
  if (email.length === 0 || password.length === 0) {
    let emailMsg = email.length ? '' : ` email`
    let passwordMsg = password.length ? '' : ` password`
    alert(`Don't leave${emailMsg}${passwordMsg} blank.`)
    return
  }
  const userInfo = {email, password}
  fetch('http://localhost:3000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.status === 'success') {
        // Login successfully
        location.href = responseData.redirectUrl
      } else if (responseData.status === 'failed') {
        // Login failed
        signinFailMsg.innerText = 'Wrong Email or Password'
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})

signUpBtn.addEventListener('click', () => {
  const name = document.querySelector('.js-sign-up-name-input').value
  const email = document.querySelector('.js-sign-up-email-input').value.toLowerCase()
  const password = document.querySelector('.js-sign-up-password-input').value

  // Check if the form is empty
  if (name.length === 0 || email.length === 0 || password.length === 0) {
    let nameMsg = name.length ? '' : ' name' 
    let emailMsg = email.length ? '' : ` email`
    let passwordMsg = password.length ? '' : ` password`
    alert(`Don't leave${nameMsg}${emailMsg}${passwordMsg} blank.`)
    return
  }

  const userInfo = {name, email, password}
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.status === 'success') {
        // Login successfully
        location.href = responseData.redirectUrl
      } else if (responseData.status === 'exist') {
        // Login failed
        signupFailMsg.innerText = 'This email has already exist.'
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})

signInForm.addEventListener('blur', (e) => {
  console.log('ff');
  const email = document.querySelector('.js-sign-in-email-input').value.toLowerCase()
  signinFailMsg.innerText = ''
  if (e.target.classList.contains('sign-in-email-input')) {
    if (!isValidEmail(email)) {
      formatAlert.style.display = 'initial'
    } else {
      formatAlert.style.display = 'none'
    }
  }
}, true)

signUpForm.addEventListener('blur', (e) => {
  signupFailMsg.innerText = ''
}, true)


// Functions
function isValidEmail (email) {
  console.log(email);
  return /[^@]+@[^@.]+\.[a-z]+$/i.test(email)
}