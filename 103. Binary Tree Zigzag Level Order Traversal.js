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
var zigzagLevelOrder = function(root) { /* 94.21 % */
  if (root === null) return [];
  return _zigzagLevelOrder([root]);
};

var _zigzagLevelOrder = function(nodeList, level = 0) {
  if (nodeList.length === 0) return [];

  const nextNodeList = [];
  const nowValList = nodeList.map(node => {
    if (node.left) nextNodeList.push(node.left);
    if (node.right) nextNodeList.push(node.right);

    return node.val;
  });

  if (level % 2 === 0) nowValList.reverse();

  return [
    nowValList.reverse(),
    ..._zigzagLevelOrder(nextNodeList, level + 1),
  ];
};
