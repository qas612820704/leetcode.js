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
var levelOrder = function(root) { /* beats 89.98% */
  const ans = [];
  traverseBFS(root, (level, node) => {
    while (level > ans.length) ans.push([]);
    ans[level - 1].push(node.val);
  });

  return ans;
};

var traverseBFS = function(root, cb) {
  if (root === null) return;

  let level = 1;
  let queue = [root];
  while (queue.length > 0) {
    const nextQueue = [];

    for (let node of queue) {
      cb(level, node);

      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    queue = nextQueue;

    level += 1;
  }
  return;
}

var levelOrder = function(root) { /* beats 89.98%, is same, LOL */
  const ans = [];
  traverseDFS(root, 1, (level, node) => {
    while (level > ans.length) ans.push([]);
    ans[level - 1].push(node.val);
  });

  return ans;
};

var traverseDFS = function(root, level, cb) {
  if (root === null) return;
  cb(level, root);
  traverseDFS(root.left, level + 1, cb);
  traverseDFS(root.right, level + 1, cb);
}
