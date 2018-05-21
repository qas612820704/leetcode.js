/* beats 91.55 % */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let a = Infinity,
      b = Infinity;

  return nums.some(c => {
    if (a >= c) a = c;
    else if (b >= c) b = c;
    else return true;
    return false;
  });
};
