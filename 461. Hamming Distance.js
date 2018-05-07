/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).split('').filter(n => n === '1').length;
};

/* beats 92.89% */
