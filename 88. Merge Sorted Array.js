/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) { /* beats 83.76% */
  m = m - 1;
  n = n - 1;

  for (let end = m + n + 1; end >= 0; end -= 1) {
    if (n < 0) {
      nums1[end] = nums1[m];
      m = m - 1;
      continue;
    }

    if (m < 0) {
      nums1[end] = nums2[n];
      n = n - 1;
      continue;
    }

    if (nums1[m] > nums2[n]) {
      nums1[end] = nums1[m];
      m = m - 1;
    } else {
      nums1[end] = nums2[n];
      n = n - 1;
    }
  }
};
