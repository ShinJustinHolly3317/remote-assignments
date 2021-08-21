// DOM elements
const mainEle = document.querySelector('.main')
const btn = document.querySelector('button')

// Functions
function ajax (src, callback) {
  fetch(src)
    .then(async (data) => {
      const newdata = await data.json()
      // Target data is an array
      console.log(newdata)
      callback(newdata)
    })
    .catch(err => {
      // Handle network error
      callback(err)
    }) 
}

function render (data) {
  // Target data is an array
  if (Array.isArray(data)) {
    data.forEach( ele => {
      const textEle = document.createElement('div')
      textEle.innerHTML += `<p><b>Product: </b>${ele.name}</p>
      <p><b>Product Price: </b>${ele.price}</p>
      <p><b>Description: </b>${ele.description}</p>`
      mainEle.appendChild(textEle)
   })
  } else if (Object.prototype.toString.call(data) === '[object Error]') {
    // handle fetch error data
    const textEle = document.createElement('h3')
    textEle.innerText = data.message
    mainEle.appendChild(textEle)
  }
}

// Listeners
btn.addEventListener('click', e => {
  e.target.remove()
  ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function(response) {
    render(response);
  })
})

