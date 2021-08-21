const signInBtn = document.querySelector('button.js-sign-in')
const signinFailMsg = document.querySelector('.js-sign-in-fail-msg')
const signInForm = document.querySelector('.js-sign-in-form')
const signinFormatAlert = document.querySelector('.format-alert-signin')
signinFailMsg.innerText = '' // Reset inner content


// Listeners
// Send post request to server api create an account
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

// Show error msg 
signInForm.addEventListener('blur', (e) => {
  const email = document.querySelector('.js-sign-in-email-input').value.toLowerCase()
  signinFailMsg.innerText = ''
  if (e.target.classList.contains('js-sign-in-email-input')) {
    if (!isValidEmail(email)) {
      signinFormatAlert.style.display = 'initial'
    } else {
      signinFormatAlert.style.display = 'none'
    }
  }
}, true)