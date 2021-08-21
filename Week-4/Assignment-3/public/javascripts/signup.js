const signUpBtn = document.querySelector('button.js-sign-up')
const signupFailMsg = document.querySelector('.js-sign-up-fail-msg')
const signUpForm = document.querySelector('.js-sign-up-form')
const signupFormatAlert = document.querySelector('.format-alert-signup')
signupFailMsg.innerText = '' // Reset inner content


// Send post request to server api create an account
signUpBtn.addEventListener('click', () => {
  const name = document.querySelector('.js-sign-up-name-input').value
  const email = document.querySelector('.js-sign-up-email-input').value.toLowerCase()
  const password = document.querySelector('.js-sign-up-password-input').value

  const userInfo = {name, email, password}
  // Check if the form is empty
  if (isEmptyForm(userInfo)) {
    alert(isEmptyForm(userInfo))
    return
  }

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

// Show error msg
signUpForm.addEventListener('blur', (e) => {
  signupFailMsg.innerText = '' // Clear error msg from server
  const email = document.querySelector('.js-sign-up-email-input').value.toLowerCase()
  
  if (e.target.classList.contains('js-sign-up-email-input')) {
    if (!isValidEmail(email)) {
      signupFormatAlert.style.display = 'initial'
    } else {
      signupFormatAlert.style.display = 'none'
    }
  }
}, true)


