// Functions
function isValidEmail (email) {
  return /[^@]+@[^@.]+\.[a-z]+$/i.test(email)
}