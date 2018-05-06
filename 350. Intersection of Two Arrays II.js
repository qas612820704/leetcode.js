/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];

  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const cntMap = nums2.reduce((map, num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    return map.set(num, map.get(num) + 1);
  }, new Map());

  return nums1.reduce((ans, num) => {
    if (cntMap.has(num)) {
      ans.push(num);

      const newCnt = cntMap.get(num) - 1;

      if (newCnt > 0)
        cntMap.set(num, newCnt);
      else
        cntMap.delete(num);

    }

    return ans;
  }, []);
};
