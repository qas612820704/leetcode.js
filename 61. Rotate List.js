/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null || k === 0) return head;
  
  let len = 1;
  let prevHead = head;
  while (prevHead.next) {
    prevHead = prevHead.next;
    
    len += 1;
  }
  
  prevHead.next = head;
  
  let stepToNewPrevHead = (((len - k) % len) + len) % len;
  
  while (stepToNewPrevHead--) {
    prevHead = prevHead.next;
  }
  
  const newHead = prevHead.next;
  prevHead.next = null;
  
  return newHead;
};