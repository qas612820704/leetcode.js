/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) { /* beats 97.52% */
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  const table = Array(n + 1).fill(0);

  table[0] = 0;
  table[1] = 1;
  table[2] = 2;

  for (let i = 3; i < n + 1; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};
