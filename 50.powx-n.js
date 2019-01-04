/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (27.09%)
 * Total Accepted:    269.4K
 * Total Submissions: 994.2K
 * Testcase Example:  '2.00000\n10'
 *
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 *
 * Example 1:
 *
 *
 * Input: 2.00000, 10
 * Output: 1024.00000
 *
 *
 * Example 2:
 *
 *
 * Input: 2.10000, 3
 * Output: 9.26100
 *
 *
 * Example 3:
 *
 *
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 *
 * Note:
 *
 *
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−231, 231 − 1]
 *
 *
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;
  return (n >= 0)
    ? _pow(x, n)
    : 1 / _pow(x, -n);
};

// reach maximum call stack when n = -2147483648
// function _pow(x, n) {
//   console.log(n);
//   if (n === 0) return 1;
//   const halfPow = _pow(x, n >> 1);
//   return halfPow * halfPow * (
//     (n % 2 === 0) ? 1 : n
//   );
// }

function _pow(x, n) {
  if (n === 0) return 1;

  let ans = 1;
  for (let i = n; i > 0; i = i >>> 1) {
    if (i % 2 !== 0)
      ans *= x;
    x = x * x;
  }

  return ans;
}