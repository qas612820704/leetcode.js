/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (22.63%)
 * Total Accepted:    114.3K
 * Total Submissions: 504.9K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodstudentgoodword",
 * ⁠ words = ["word","student"]
 * Output: []
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (s.length === 0 || words.length === 0) return [];

  const m = words[0].length,
        n = words.length;
  
  const wordsTotal = words.reduce((cntr, word) => ({
    ...cntr,
    [word]: (cntr[word] || 0) + 1,
  }),{});

  const ans = [];
  for (let i = 0; i < s.length - m * n + 1; i++) {
    const wordsCntr = {};

    let j;
    for (j = 0; j < n; j++) {
      const word = s.substr(i + j * m, m);
      if (wordsTotal[word] === undefined) break;
      
      wordsCntr[word] = (wordsCntr[word] || 0) + 1;
      
      if (wordsCntr[word] > wordsTotal[word]) break;
    }
    if (j === n) ans.push(i);
  }

  return ans;
};