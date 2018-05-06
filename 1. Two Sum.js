/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 15.55% O(n^2) */
var twoSum = function(nums, target) {
  var i, j;
  for(i=0; i < nums.length - 1; i++) {
    for(j=i+1; j < nums.length; j++ ) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
};

/* 76.41% O(nlog(n)) % */
var twoSum = function(nums, target) {
  if (nums.length < 2) return [];
  if (nums.length === 2) return [0, 1];

  const sortedIndices = nums
    .map((_, i) => i)
    .sort((a, b) => nums[a] - nums[b]);

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const indexSmall = sortedIndices[start];
    const indexLarge = sortedIndices[end];

    if (nums[indexSmall] + nums[indexLarge] > target)
      end = end - 1;
    else if (nums[indexSmall] + nums[indexLarge] < target)
      start = start + 1;
    else
      return [indexSmall, indexLarge];
  }

  return [];
};

/* 95.00% O(n)*/
var twoSum = function(nums, target) {
  if (nums.length < 2) return [];
  if (nums.length === 2) return [0, 1];

  const avaliable = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const remainder = target - nums[i];

    if (avaliable.has(remainder)) {
      return [avaliable.get(remainder), i];
    }
    avaliable.set(nums[i], i);
  }

  return [];
}
