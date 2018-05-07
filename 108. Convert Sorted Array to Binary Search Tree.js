/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) { /* beats 19.61 */
  if (nums.length === 0) return null;
  const middle = Math.floor(nums.length / 2);

  const middleNum = nums.splice(middle, 1)[0];

  const rightNums = nums;
  const leftNums = nums.splice(0, middle);

  const root = new TreeNode(middleNum);
  root.left = sortedArrayToBST(leftNums);
  root.right = sortedArrayToBST(rightNums);

  return root;
};

var sortedArrayToBST = function(nums) { /* beats 97.65% */
  return _sortedArrayToBST(nums, 0, nums.length - 1);
};

var _sortedArrayToBST = function(nums, start, end) {
  if (start > end) return null;
  const middleIndex = Math.floor((start + end) / 2);

  const root = new TreeNode(nums[middleIndex]);
  root.left = _sortedArrayToBST(nums, start, middleIndex - 1);
  root.right = _sortedArrayToBST(nums, middleIndex + 1, end);

  return root
}
