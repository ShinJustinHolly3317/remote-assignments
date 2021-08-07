// binary search
function binarySearchPosition(numbers, target) {
  /* 
  1. Array needs to be sorted in accending order.
  2. Cut the array in half, compare that the Target is bigger or smaller than the mid element，then find out which half the Targe is in.
  3. Pick the half array which the Target is in.
  4. Keep cutting in half until there is only one element in the array
  5. Find out the element equals to Target or not
  */
  let beginIndex = 0
  let lastIndex = numbers.length - 1

  while (lastIndex >= beginIndex) {
    const midIndex = Math.floor((beginIndex + lastIndex ) / 2)
    const midNum = numbers[midIndex]
    if (midNum === target) {
      // base case
      return midIndex
    } else if (midNum > target) {
      // slice the left half of the array
      lastIndex = midIndex - 1
    } else {
      // Slice the right half of the array
      beginIndex = midIndex + 1
    }
  }
  
  // Target not in this array
  return -1
}


console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3

