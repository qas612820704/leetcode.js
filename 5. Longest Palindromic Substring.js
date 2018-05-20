/* beats 97.84 % */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === null || s.length <= 1) return s;

  const joinDotStr = `@.${s.split('').join('.')}.`;

  let center;

  const z = manacher(joinDotStr, (maxIndex) => center = maxIndex);

  return joinDotStr
    .substring(center - (z[center] - 1), center + z[center])
    .split('.').join('')

};

const manacher = (s, callback) => {
  const z = Array(s.length).fill(1);

  let nowMax = 0;

  let mid = 0;
  let right = 0;
  for (let i = 1; i < s.length; i += 1) {
    z[i] = i < right ? Math.min(z[2* mid - i], right - i) : 1; // mirror = mid - (i - mid)

    while (s[i + z[i]] === s[i - z[i]]) z[i] += 1;

    if (z[i] >= z[nowMax]) callback(nowMax = i);

    if (z[i] + i > right) {
      mid = i;
      right = i + z[i];
    }

  }

  return z;
};
