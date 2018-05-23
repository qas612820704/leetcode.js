/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) { /* beats 97.74 % */
  const inorderMap = inorder.reduce((map, v, i) => {
    map[v] = i;
    return map;
  }, {});

  const build = (l, r) => {
    if (l > r) return null;

    const root = new TreeNode(preorder.shift());

    root.left = build(l, inorderMap[root.val] - 1);
    root.right = build(inorderMap[root.val] + 1, r);

    return root;
  }

  return build(0, inorder.length - 1);
};
