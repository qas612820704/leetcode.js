/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length <= 1) return false;

  nums.sort((a, b) => a - b);

  return nums.slice(1).some((curNum, i) => {
    const prevNum = nums[i];
    return prevNum === curNum;
  });
};

var containsDuplicate = function(nums) {
  const appear = new Set();
  return nums.some(num => {
    if (appear.has(num)) return true;
    appear.add(num);
    return false;
  });
}
