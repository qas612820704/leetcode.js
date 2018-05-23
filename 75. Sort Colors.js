/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) { /* beats 96.23 % */

  let start = 0;
  while (nums[start] === 0) start++;

  for (let i = start; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      start++;
    }
  }

  let end = nums.length - 1;
  while (nums[end] === 2) end--;

  for (let i = end; i >= start; i--) {
    if (nums[i] === 2) {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end --;
    }
  }
};
