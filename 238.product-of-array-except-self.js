/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (52.71%)
 * Total Accepted:    203.7K
 * Total Submissions: 385.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums of n integers where n > 1,  return an array output such
 * that output[i] is equal to the product of all the elements of nums except
 * nums[i].
 *
 * Example:
 *
 *
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 *
 *
 * Note: Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does
 * not count as extra space for the purpose of space complexity analysis.)
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [0];

  const result = [];

  let productBefore = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(productBefore);
    productBefore *= nums[i];
  }

  let productAfter = 1;
  for (let j = nums.length - 1; j >= 0; j --) {
    result[j] *= productAfter;
    productAfter *= nums[j];
  }

  return result;
};