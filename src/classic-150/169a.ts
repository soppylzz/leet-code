/**
 * Reflection:
 * 1. Boyer-Moore Voting
 * 2. lang-ago memory
 * */
function majorityElement(nums: number[]): number {
  const length = nums.length
  if (length <= 2) return nums[0]

  let [count, iter, major] = [0, 0, nums[0]]

  while (count < nums.length - iter) {
    if (nums[iter] === major) {
      count++
    } else {
      count--
      if (count === -1) {
        major = nums[iter]
        count = 0
      }
    }
    iter++
  }
  return major
}

function _best(nums: number[]): number {
  let count = 0
  let candidate = 0

  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  return candidate
}

function run() {
  const nums: number[] = [2, 2, 1, 1, 1, 2, 2]
  const res = majorityElement(nums)
  console.log(res)
}

export { run }
