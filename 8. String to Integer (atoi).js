/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX_INT = ~(1 << 31);
  const MIN_INT = 1 << 31;

  const match = str.trimLeft().match(/^[+-]?[0-9]+/);

  return match
    ? Math.max(MIN_INT, Math.min(Number(match[0]), MAX_INT))
    : 0;
};
