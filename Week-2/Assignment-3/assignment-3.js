// Q1
function count(input) {
  const countResult = {}
  for (let i = 0; i < input.length; i++) {
    if (input[i] in countResult) {
      countResult[input[i]]++
    } else {
      countResult[input[i]] = 1
    }
  }
  return countResult
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x']
console.log('Q1:', count(input1));


// Q2
function groupByKey(input) {
  const countResult = {}
  for (let i = 0; i < input.length; i++) {
    if (input[i].key in countResult) {
      countResult[input[i].key] += input[i].value
    } else {
      countResult[input[i].key] = input[i].value
    }
  }
  return countResult
}

let input2 = [
  {key: 'a', value: 3},
  {key: 'b', value: 1},
  {key: 'c', value: 2},
  {key: 'a', value: 3},
  {key: 'c', value: 5}
]
console.log('Q2:', groupByKey(input2));
