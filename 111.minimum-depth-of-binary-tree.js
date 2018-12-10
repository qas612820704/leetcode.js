/*
  ✔ Accepted
  ✔ 41/41 cases passed (68 ms)
  ✔ Your runtime beats 18.32 % of javascript submissions

 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (34.14%)
 * Total Accepted:    243.3K
 * Total Submissions: 712.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * return its minimum depth = 2.
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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) return 0;
  return _minDepth(root);
};

var _minDepth = function(root) {
  if (root.left === null && root.right === null) return 1;

  let leftDepth = Infinity,
      rightDepth = Infinity;

  if (root.left)
    leftDepth = minDepth(root.left);
  
  if (root.right)
    rightDepth = minDepth(root.right);

  return 1 + Math.min(leftDepth, rightDepth);

}