/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;

  let maxLen = 0;
  let start = 0;

  let prevShown = {};
  s.split('').forEach((c, i) => {
    if (c in prevShown && start <= prevShown[c]) {
      start = prevShown[c] + 1;
    }

    prevShown[c] = i;

    maxLen = Math.max(maxLen, i - start + 1);
  });

  return maxLen;
};
