/* 
  ✔ Accepted
  ✔ 114/114 cases passed (64 ms)
  ✔ Your runtime beats 41.53 % of javascript submissions

 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (35.95%)
 * Total Accepted:    250.3K
 * Total Submissions: 696.4K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \      \
 * 7    2      1
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;

  return _hasPathSum(root, sum);
};

var _hasPathSum = function(root, sum) {
  if (root.left === null && root.right === null)
    return root.val === sum;

  if (root.left && _hasPathSum(root.left, sum - root.val))
    return true;

  if (root.right && _hasPathSum(root.right, sum - root.val))
    return true;

  return false;
}