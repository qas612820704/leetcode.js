/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) { /* beats 91.81 % */
  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [[], nums];

  return nums.reduce((ans, n) => {
    ans.forEach(sol => {
      ans.push([...sol, n]);
    });

    return ans;
  }, [[]]);
};
