/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) { /* beats 90.34% */
  if (n < 1) return false;
  if (n === 1) return true;
  return isPowerOfThree(n / 3);
};

var isPowerOfThree = function(n) { /* beats 94.20% */
  if (!Number.isInteger(n) || n === 0) return false;
  if (n === 1) return true;
  return isPowerOfThree(n / 3);
};

var isPowerOfThree = function(n) { /* beats 96.62% */
  const maxPowerOf3InInt32 = 1162261467;
  return n > 0 && maxPowerOf3InInt32 % n === 0;
};
