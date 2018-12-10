/*
  ✔ Accepted
  ✔ 227/227 cases passed (68 ms)
  ✔ Your runtime beats 51.57 % of javascript submissions
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (39.29%)
 * Total Accepted:    258.1K
 * Total Submissions: 657K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * 
 * a binary tree in which the depth of the two subtrees of every node never
 * differ by more than 1.
 * 
 * 
 * Example 1:
 * 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * Return true.
 * 
 * Example 2:
 * 
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * Return false.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return checkDepth(root) !== -1;

  function checkDepth(root) {
    if (root === null) return 0;
    let leftDepth = checkDepth(root.left);
    if (leftDepth < 0) return -1;
    let rightDepth = checkDepth(root.right);
    if (rightDepth < 0) return -1;
    
    return Math.abs(leftDepth - rightDepth) > 1
      ? -1
      : 1 + Math.max(leftDepth, rightDepth);
  }
};
