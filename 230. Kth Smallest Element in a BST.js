/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) { /* beats 100.00 % */
  let ans;
  let nth = 0;
  let halt = false;

  traverse(root);

  return ans;
  function traverse(root) {
    if (root === null || halt === true) return;

    traverse(root.left);

    if ((++nth) === k) {
      ans = root.val;

      halt = true;
    }

    traverse(root.right);
  };
};

