/**
 * Reflection:
 * 1. Use a draft to outline the implementation process
 *
 * [1**,1,1,2,2,2,3]
 * [1*,1,1,2*,2,2,3]
 * [1*,1?,1,2*,2,2,3]
 * [1,1,1*,2*,2,2,3]
 * [1,1,1->2*,2*,2,2,3]
 * [1,1,2*,2*,2?,2,3]
 * [1,1,2*,2->2*,2,2,3]
 * [1,1,2**,2,2,2,3]
 * */
function removeDuplicates(nums: number[]): number {
  const length = nums.length
  if (length === 1) return 1

  let temp: number
  let [source, search] = [0, 0]

  while (search <= length - 1) {
    if (nums[source] >= nums[search]) {
      search++
      continue
    }
    source = nums[source] === nums[source + 1] ? source + 2 : source + 1

    temp = nums[source]
    nums[source] = nums[search]
    nums[search] = temp

    if (search < length - 1 && nums[source] === nums[search + 1]) {
      temp = nums[source + 1]
      nums[source + 1] = nums[search + 1]
      nums[search + 1] = temp
    }
    search = source
  }

  return source === length - 1
    ? source + 1
    : nums[source] === nums[source + 1]
      ? source + 2
      : source + 1
}

/**
 * Reflection:
 * 我是考虑的怎么通过加来维持最多两位相等数组（四种情况），因此需要考虑source、search两个位置
 * 但实际上我们可以通过限制加第三个相等的数字来实现该效果
 * */
function _best(nums: number[]) {
  const n = nums.length
  if (n <= 2) return n

  let slow = 2

  for (let fast = 2; fast < n; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  return slow
}

function _rewrite(nums: number[]): number {
  const length = nums.length
  if (length <= 2) return length

  // consider length >= 3
  let [slow, fast] = [2, 2]
  while (fast < length) {
    // pinch
    if (nums[fast] == nums[slow - 2]) {
      fast++
    } else {
      nums[slow++] = nums[fast++]
    }
  }
  return slow
}

function run() {
  const nums: number[] = [1]
  const res = removeDuplicates(nums)
  console.log(nums, res)
}

export { run }
