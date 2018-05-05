/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m < n) [m, n] = [n, m];
  return C(m + n - 2, m - 1);
};

var C = function(m, n) {
  let ans = 1;
  let p = m - n;

  while (m > n) {
    ans = ans * m;

    m = m - 1;
  }

  while (p > 1) {
    ans = ans / p;

    p = p - 1;
  }

  return ans;
}
