/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (49.58%)
 * Total Accepted:    87.7K
 * Total Submissions: 176.9K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  const board = new Array(n).fill(null).map(_ => new Array(n).fill('.'));
  const allQueens = new Set();

  let ans = 0;
  solveCol(0);
  return ans;

  function solveCol(j) {
    if (j >= n) {
      ans++;
      return true;
    }

    let hasSolution = false;
    for (let i = 0; i < n; i++) {
      
      if (isSafeAt(i, j)) {
        const queen = [i, j, i + j, i - j];

        board[i][j] = 'Q';
        allQueens.add(queen);
        
        if (solveCol(j + 1))
          hasSolution = true;

        board[i][j] = '.';
        allQueens.delete(queen);
      }
    }

    return hasSolution;
  }
  function isSafeAt(i, j) {
    const add_1 = i + j;
    const sub_1 = i - j;
    for (let [x, _, add_2, sub_2] of allQueens) {
      if (i === x) return false;
      if (add_1 === add_2) return false;
      if (sub_1 === sub_2) return false;
    }
    return true;
  }
};