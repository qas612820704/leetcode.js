/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let ans = [];

  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const len1 = nums1.length;
  const len2 = nums2.length;

  for (let i = Math.max(0, k - len2); i < Math.min(k, len1) + 1; i += 1) {
    ans = max(ans,
              merge(
                maxKnums(nums1, i),
                maxKnums(nums2, k - i)
              )
             );
  }

  return ans;
};

var maxKnums = function(nums, k) {
  if (nums.length <= k) return nums.slice();

  let lenCanThrow = nums.length - k;

  return nums
    .reduce((newNums, num) => {
      while (lenCanThrow > 0 &&
             isLastLessThan(newNums, num)) {
        newNums.pop();
        lenCanThrow -= 1;
      }

      return [
        ...newNums,
        num
      ];

    }, [])
    .slice(0, k);
}

var isLastLessThan = function(nums, num) {
  if (nums.length === 0) return false;
  return nums[nums.length - 1] < num;
}

var max = function(nums1, nums2) {
  for (let i = 0; i < nums1.length; i += 1) {
    if (i > nums2.length - 1) return nums1;
    if (nums1[i] > nums2[i]) return nums1;
    if (nums1[i] < nums2[i]) return nums2;
  }

  return nums2;
}

var merge = function(nums1, nums2) {
  const ans = []

  while (nums1.length > 0 || nums2.length > 0) {
    const target = max(nums1, nums2);

    ans.push(target.shift());
  }

  return ans;
}
