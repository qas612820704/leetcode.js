/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const appearSet = nums.reduce((set, num) => set.add(num), new Set());

  let missNum = -1;
  while (true) {
    if (!appearSet.has(++missNum)) return missNum;
  }
};
/* beats 53.80% */

var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i+= 1) {
    if (i !== nums[i]) return i;
  }

  return nums.length;
};
/* beats 27.49% */

var missingNumber = function(nums) {
  return nums.reduce((acc, num, i) => acc + i - num, nums.length);
  // eg: [0,1,3]
  // ans = (1 + 2 + 3) - (0 + 1 + 3) = (0 + 1 + 2) - (0 + 1 + 3) + 3
  //                                   i             num           nums.length
};
/* beats 100% */
