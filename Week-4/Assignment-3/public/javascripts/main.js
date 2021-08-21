// Functions
function isValidEmail (email) {
  return /[^@]+@[^@.]+\.[a-z]+$/i.test(email)
}

function isEmptyForm (dataObj) {
  let wrongAlert = ''
  for (let key in dataObj) {
    if (dataObj[key].length === 0) {
      wrongAlert += ' ' + key
    }
  }
  if (wrongAlert) {
    return `Don't leave${wrongAlert} blank.`
  }
  return ''
}