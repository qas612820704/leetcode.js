/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false;

  let slowerNode = head;
  let fasterNode = head;

  while (fasterNode !== null && fasterNode.next !== null) {
    slowerNode = slowerNode.next;
    fasterNode = fasterNode.next.next;

    if (slowerNode === fasterNode) return true;
  }

  return false;
};

/* beats 100% */
