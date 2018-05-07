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
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const head =  l1.val < l2.val ? l1 : l2;

  if (l1.val < l2.val) {
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head.next = mergeTwoLists(l1, l2.next);
  }

  return head;
};
