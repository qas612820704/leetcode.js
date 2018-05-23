/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) { /* beats 16.35 % */
  if (root === null) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
};

var inorderTraversal = function(root) { /* beats 93.44 % */
  const stack = [root];

  const ans = [];
  let node;
  while (node = stack.pop()) {
    if (node.visited) {
      ans.push(node.val);
      continue;
    }

    node.visited = true;

    if (node.right) stack.push(node.right);
    stack.push(node);
    if (node.left) stack.push(node.left);
  }

  return ans;
}
