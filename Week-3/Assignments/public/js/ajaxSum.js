let xhr = new XMLHttpRequest()
const input = document.querySelector('#numberInput')
const formGroup = document.querySelector('.group')
const answer = document.querySelector('.answer')
const alrt = document.querySelector('#alert')

// Listener
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const response = xhr.responseText
      answer.innerHTML = `<p>${response}</p>
        <a href="/sum.html" class="btn">Do it again</a>
      `
    } else {
      // handle error
      console.log(xhr.statusText);
    }
  } 
}

// Functions
function sendAjax () {
  const number = input.value 
  if (!number) {
    alert('Please enter positive integer')
  } else {
    xhr.open('GET', `http://localhost:3000/data?number=${number}`)
    xhr.send()
    formGroup.style.display = 'none'
    alrt.style.display = 'none'
    console.log('sent')
  }
}