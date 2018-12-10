/*
  ✔ Accepted
  ✔ 165/165 cases passed (68 ms)
  ✔ Your runtime beats 26.77 % of javascript submissions

 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (40.92%)
 * Total Accepted:    266.2K
 * Total Submissions: 650.5K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 * 
 */
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
var deleteDuplicates = function(head) {
  const dummy = new ListNode(undefined);
  dummy.next = head;
  let prev = dummy;
  while (head) {
    if (prev.val === head.val) {
      prev.next = head.next;
    } else {
      prev = head;
    }
    head = head.next;
  }
  
  return dummy.next;
};
