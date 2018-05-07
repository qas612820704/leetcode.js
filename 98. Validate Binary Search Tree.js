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
var isValidBST = function(root) { /* beats 98.63% */
  return _isValidBST(root, -Infinity, Infinity);
};

var _isValidBST = function(root, min, max) {
  if (root === null) return true;
  if (root.val >= max || root.val <= min) return false;
  return _isValidBST(root.left, min, root.val) && _isValidBST(root.right, root.val, max);
}
