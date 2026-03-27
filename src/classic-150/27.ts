/**
 * Reflection:
 * 1. notice 0-length inputs
 * */
function removeElement(nums: number[], val: number): number {
  let [start, end] = [0, nums.length - 1]
  if (nums.length === 0) return 0

  while (start !== end) {
    // find first start & end val
    if (nums[start] !== val) {
      start++
      continue
    }
    if (nums[end] === val) {
      end--
      continue
    }
    // switch pair
    const temp = nums[end]
    nums[end] = nums[start]
    nums[start] = temp
  }
  return start + (nums[start] === val ? 0 : 1)
}

function run() {
  const nums: number[] = []
  const val = 10
  const k = removeElement(nums, val)
  console.log(nums, k)
}

export { run }
