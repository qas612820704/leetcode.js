/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (36.36%)
 * Total Accepted:    120K
 * Total Submissions: 330K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const board = new Array(n).fill(null).map(_ => new Array(n).fill('.'));
  const allQueens = new Set();

  const ans = []
  solveCol(0);
  return ans;

  function solveCol(j) {
    if (j >= n) {
      ans.push(board.map(row => row.join('')));
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
