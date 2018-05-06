/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.length === 1
    ? nums[0]
    : nums.reduce((xorTotal, num) => xorTotal ^ num, 0);
};
