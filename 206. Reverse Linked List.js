/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let prev;
  let cur = null;
  let next = head;

  while(next !== null) {
    prev = cur;
    cur = next;
    next = next.next;

    cur.next = prev;

  }

  return cur;
};
