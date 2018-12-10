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
var solveNQueens = function(n) {
  const nQueensOnDiagonal = generateNQueensOnDiagonal(n);
  const solutions = genPermutations(nQueensOnDiagonal);

  return solutions.filter(board => hasNoTwoQueenOnDiagonal(board));
};
function generateNQueensOnDiagonal(n) {
  const nQueensOnDiagonal = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(n).fill('.');
    row[i] = 'Q';

    nQueensOnDiagonal.push(row.join(''));
  }
  return nQueensOnDiagonal;
}
function genPermutations(l) {
  const ans = [];

  permutate(l.length, sol => ans.push(sol));

  return ans;

  function permutate(n, callback) {
    if (n === 1)
      callback([ ...l ]);
    
    for (let i = 0; i < n; i++) {
      [ l[i], l[n - 1] ] = [ l[n - 1], l[i] ];
      permutate(n - 1, callback);
      [ l[i], l[n - 1] ] = [ l[n - 1], l[i] ];
    }

    return;
  }
}
function hasNoTwoQueenOnDiagonal(board) {
  const n = board.length;

  for (let i = 0; i < n - 1; i++) {
    const j = findQueenIndexInRow(board[i]);
    
    for (let k = 1; k < n - i; k++) {
      if (
        board[i + k][j - k] === 'Q' ||
        board[i + k][j + k] === 'Q'
      )
        return false;
    }

  }
  return true;
}
function findQueenIndexInRow(row) {
  for (let j = 0; j < row.length; j++)
    if (row[j] === 'Q')
      return j;
  return -1;
}