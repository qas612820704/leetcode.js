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
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true;

  let middleNode = head;
  let fasterNode = head;

  while(fasterNode !== null && fasterNode.next !== null) {
    middleNode = middleNode.next;
    fasterNode = fasterNode.next.next;
  }

  let tail = reverseList(middleNode);

  while (head && tail) {
    if (head.val !== tail.val)
      return false;

    head = head.next;
    tail = tail.next;
  }

  return true;
};

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

/* beats 100.00 % */
