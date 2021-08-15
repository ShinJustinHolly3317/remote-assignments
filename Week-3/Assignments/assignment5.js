function twoSum (nums, target) {
  // O(n^2)
  // for (let i = 0; i < nums.length; i++){
  //   let subNum = target - nums[i]
  //   if (nums.slice(i+1).includes(subNum)) return [i, nums.slice(i+1).indexOf(subNum)+i+1]
  // }

  // O(n)
  /**
   * Above method will cause O(n) when searching in array.
   * Optimize by adding numbers to Object to reduce searching time.
   */
  const searchObj = {[nums[0]]: 0}

  for (let i = 1; i < nums.length; i++) {
    let subNum = target - nums[i]
    if (subNum in searchObj) {
      return [searchObj[subNum], i]
    } else {
      searchObj[nums[i]] = i
    }
  }

  return 'Cannot find any match!'
}


// Main
const arr = [2, 7, 11, 15]
const target = 9

console.log(twoSum(arr, target));

