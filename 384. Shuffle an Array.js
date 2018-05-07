/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  return this.nums.slice().map((num, i, nums) => {
    const swapIndex = Math.floor(Math.random() * (nums.length - i)) + i;

    nums[i] = nums[swapIndex];
    nums[swapIndex] = num;

    return nums[i];
  })
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

/* beats 100% */
