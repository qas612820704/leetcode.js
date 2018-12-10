/*
  ✔ Accepted
  ✔ 34/34 cases passed (56 ms)
  ✔ Your runtime beats 31.84 % of javascript submissions
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (43.87%)
 * Total Accepted:    185.9K
 * Total Submissions: 423.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return [];
  
  const ans = [];
  
  let level = [root];
  while (level.length > 0) {
    const rowAns = [];

    let nextLevel = [];
    level.forEach(node => {
      rowAns.push(node.val);
      if (node.left) 
        nextLevel.push(node.left);
      if (node.right)
        nextLevel.push(node.right);
    })
    ans.unshift(rowAns);
    level = nextLevel;
  }

  return ans;
};
