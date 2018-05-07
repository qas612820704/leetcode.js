/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let nOffsetNode = dummyHead;
  for (let i = 0; i < n; i += 1) {
    nOffsetNode = nOffsetNode.next;
  }

  let prevRemoveNode = dummyHead;
  while (nOffsetNode.next !== null) {

    nOffsetNode = nOffsetNode.next;
    prevRemoveNode = prevRemoveNode.next;
  }

  prevRemoveNode.next = prevRemoveNode.next.next;

  return dummyHead.next;
};
