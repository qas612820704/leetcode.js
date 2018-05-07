/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).split('').filter(n => n === '1').length;
};

/* 99.53% */
