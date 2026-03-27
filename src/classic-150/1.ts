/**
 * Reflections:
 * 1. check limit situation (has queue, no nums2)
 * 2. state loopback
 * */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return
  let [i, j] = [0, 0]
  const queue: number[] = []

  while (i < m + n) {
    if (i < m) queue.push(nums1[i])
    if (j === n || queue[0] <= nums2[j]) {
      nums1[i] = queue.shift()!
      i++
    } else {
      nums1[i] = nums2[j]
      i++
      j++
    }
  }
}

function run() {
  const nums1 = [2, 0]
  const nums2 = [1]
  merge(nums1, 1, nums2, 1)
  console.log(nums1)
}

export { run }
