class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
/**
 * Reflection:
 * 1. cached travel
 * */
function count(root: TreeNode | null, k: number): [number, number] /* return [cnt, val] */ {
  if (root === null) return [0, -1]

  const [lCount, lVal] = count(root.left, k)
  if (lCount === k) return [k, lVal]
  if (lCount + 1 === k) return [k, root.val]
  // lCount + 1 < k
  const [rCount, rVal] = count(root.right, k - lCount - 1)
  if (rCount + lCount + 1 === k) return [k, rVal]
  return [rCount + lCount + 1, -1]
}

function kthSmallest(root: TreeNode | null, k: number): number {
  return count(root, k)[1]
}
