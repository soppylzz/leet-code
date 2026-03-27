class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * Reflection:
 * [*] integer division and mod
 * */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res = new ListNode(0, null)

  let p1 = l1,
    p2 = l2,
    pRes = res
  while (p1 !== null || p2 != null) {
    const [v1 = 0, v2 = 0, vRes = 0] = [p1?.val, p2?.val, pRes?.val]
    const sum = v1 + v2 + vRes

    pRes.val = sum % 10
    const carry = Math.floor(sum / 10)

    p1 = p1 === null ? null : p1.next
    p2 = p2 === null ? null : p2.next

    if (!(p1 === null && p2 === null) || carry > 0) {
      pRes.next = new ListNode(carry, null)
      pRes = pRes.next
    }
  }
  return res
}