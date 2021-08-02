/* Html elements */
const welcomeEle = document.querySelector('.welcome')
const contentEle = document.querySelector('.js-toggle-content-boxs')
const showBtn = document.querySelector('.back-btn')


/* Listeners */
welcomeEle.addEventListener('click', () => {
  // This listener will change the welcome text as use click
  if (!welcomeEle.classList.contains('changed')) {
    welcomeEle.innerHTML = '<h2>Have a good time!</h2>'
    welcomeEle.classList.toggle('changed')
  } else {
    welcomeEle.innerHTML = '<h2>Hello Everyone!</h2>'
    welcomeEle.classList.toggle('changed')
  }
})

showBtn.addEventListener('click', () => {
  // This lisener shows the hidden content when click on the button
  contentEle.classList.toggle('hidden')
})