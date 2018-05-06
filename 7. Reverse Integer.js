/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_INT = ~(1 << 31);
  const MIN_INT = 1 << 31;

  const digitAry = x.toString().split('');

  let sign = 1;

  if (digitAry[0] === '-') {
    sign = -1;
    digitAry.shift();
  }

  const ans = sign * Number(digitAry.reverse().join(''));

  return between(ans, MIN_INT, MAX_INT) ? ans : 0;

};

var between = function(number, min, max) {
  return min <= number && number <= max;
}
