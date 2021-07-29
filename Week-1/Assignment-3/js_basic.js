/* Global variables */
const CHAR_DIC = ['a', 'b', 'c', 'd', 'e']


// main function 
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
console.log('The amounts of (a, b) is:', countAandB(input1))
console.log('Number converted array is:', toNumber(input1))

let input2 = ['e', 'd', 'c', 'd', 'e']
console.log('The amounts of (a, b) is:', countAandB(input2))
console.log('Number converted array is:', toNumber(input2))


// functions
function countAandB (arr) {
  let filteredArr = arr.filter(ele => ele === 'a' || ele === 'b')
  return filteredArr.length
}

function toNumber (arr) {
  let numArr = arr.map(ele => CHAR_DIC.indexOf(ele) + 1);
  return numArr
}