/* beats 98.95 % */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
  if (carry === 0) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
  }
  if (l1 === null && l2 === null && carry === 1) return new ListNode(1);

  let ans = l1 ? l1 : l2;

  if (l1 === null) l1 = dummyNode;
  if (l2 === null) l2 = dummyNode;

  ans.val = l1.val + l2.val + carry;
  carry = 0;

  if (ans.val > 9) {
    ans.val = ans.val - 10;
    carry = 1;
  }

  ans.next = addTwoNumbers(l1.next, l2.next, carry);

  return ans;
};

var dummyNode = new ListNode(0);
