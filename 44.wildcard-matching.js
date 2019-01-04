/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (21.94%)
 * Total Accepted:    152.7K
 * Total Submissions: 694.3K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 *
 *
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "adceb"ㄍ
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p === '') return s === '';

  const m = p.length;
  const n = s.length;

  const dp = new Array(n + 1).fill(null).map(
    _ => new Array(m + 1).fill(false)
  );

  dp[0][0] = true;

  for (let j = 1; j < m + 1; j++) {
    if (p[j - 1] === '*')
      dp[0][j] = dp[0][j - 1];
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (
          p[j - 1] === s[i - 1]
       || p[j - 1] === '?'
      )
        dp[i][j] = dp[i - 1][j - 1];
      else if (p[j - 1] === '*')
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
    }
  }

  return dp[n][m];
};