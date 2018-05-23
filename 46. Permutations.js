/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) { /* beats 82.29 % */

  const ans = [];

  generate(nums, (sol) => ans.push(sol));

  return ans;

  function generate(nums, callback, start = 0) {
    if (start >= nums.length) return callback(nums.slice());

    for (let i = start; i < nums.length; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];

      generate(nums, callback, start + 1);

      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
};
