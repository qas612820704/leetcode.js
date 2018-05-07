/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { /* beats 97.62% */
  if (nums.length === 0) return NaN;
  if (nums.length === 1) return nums[0]

  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {

    sum = Math.max(nums[i], sum + nums[i]);

    max = Math.max(max, sum);

  }

  return max;

};
