/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums.length;

  let size = nums.length - 1;

  let index = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] != nums[i]) {
      nums[++index] = nums[i];
    }
  }

  return index + 1;
};
