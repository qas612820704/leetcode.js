/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const MAX_INT = ~(1 << 31);
  const MIN_INT = 1 << 31;

  const tmp = dividend / divisor;
  const ans = tmp > 0 ? Math.floor(tmp) : Math.ceil(tmp);

  return Math.min(Math.max(MIN_INT, ans), MAX_INT)
};
