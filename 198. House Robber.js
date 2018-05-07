/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) { /* beats 97.48% */
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const maxMoney = Array(nums.length);
  maxMoney[0] = nums[0];
  maxMoney[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i+= 1) {
    maxMoney[i] = Math.max(nums[i] + maxMoney[i - 2], maxMoney[i - 1]);
  }

  return maxMoney.pop();
};
