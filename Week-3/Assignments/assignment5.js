function twoSum (nums, target) {
  // O(n^2)
  // for (let i = 0; i < nums.length; i++){
  //   let sub1 = target - nums[i]
  //   if (nums.slice(i+1).includes(sub1)) return [i, nums.indexof(sub1)+i+1]
  // }

  // O(n)
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
const arr = [3,3]
const target = 9

console.log(twoSum(arr, target));

