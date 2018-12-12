/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (40.39%)
 * Total Accepted:    226.5K
 * Total Submissions: 560.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let total = 0,
      left = 0,
      right = height.length - 1,
      leftMax = 0,
      rightMax = 0;

  while (left <= right) {
    if (leftMax  < height[left] ) leftMax  = height[left];
    if (rightMax < height[right]) rightMax = height[right];
    
    total += (height[left] < height[right])
      ? leftMax - height[left++]
      : rightMax - height[right--];
  }
  
  return total;
};