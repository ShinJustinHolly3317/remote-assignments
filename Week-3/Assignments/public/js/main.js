const form = document.querySelector('form')
const inputEle = form.querySelector('input')

form.addEventListener('submit', () => {
  if (!inputEle.value.length) {
    alert('Please enter something!')
  }
})