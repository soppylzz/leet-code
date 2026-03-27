function removeDuplicates(nums: number[]): number {
  let unique = 0
  let cur = 0

  while (cur < nums.length) {
    if (nums[unique] == nums[cur]) {
      cur++
    } else {
      nums[++unique] = nums[cur]
    }
  }
  return unique + 1
}

function run() {
  const nums = [1]
  const unique = removeDuplicates(nums)
  console.log(nums, unique)
}

export { run }
