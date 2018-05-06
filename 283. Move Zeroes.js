/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length === 0) return nums;

  let end = 0;

  nums.forEach((num, i) => {
    if (num !== 0) {
      nums[end++] = num;
    }
  });

  while (end < nums.length) {
    nums[end++] = 0;
  }

};
