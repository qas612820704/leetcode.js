/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length < 2) return;
  if (nums.length === 2) {
    nums.reverse();
    return;
  }
  
  let indexSmall = nums.length - 2;
  
  while (indexSmall >= 0 && nums[indexSmall] >= nums[indexSmall + 1])
    indexSmall -= 1;
  
  if (indexSmall >= 0) {
    let indexLastBig = nums.length - 1;
    
    while (nums[indexLastBig] <= nums[indexSmall])
      indexLastBig -= 1;
    
    [nums[indexSmall], nums[indexLastBig]] = [nums[indexLastBig], nums[indexSmall]];
    
  }
  
  reverse(nums, indexSmall + 1, nums.length - 1);
  
};

var reverse = function(nums, from, to) {
  while (from < to) {
    [nums[from], nums[to]] = [nums[to], nums[from]]
    
    from += 1;
    to -= 1
  }
  
  return nums;
}
