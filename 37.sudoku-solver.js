/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (34.44%)
 * Total Accepted:    109.7K
 * Total Submissions: 318.6K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const hasShown = genHasShown(board);

  solve(board, hasShown);
  
  return;
};
function solve(board, hasShown) {
  return solvePosition(0, 0);
  
  function solvePosition(i, j) {
    if (i === 9 && j === 0) return true;

    const next_i = j < 8 ? i : i + 1; 
    const next_j = (j + 1) % 9;

    if (board[i][j] !== '.')
      return solvePosition(next_i, next_j);

    const k = cordToBlkIndex(i, j);
    for (let n = 1; n <= 9; n++) {
      const char = `${n}`;
      if (isValid(char, i, j, k)) {
        fill(char, i, j, k);
        if (solvePosition(next_i, next_j))
          return true;
        fill('.', i, j, k);
      }
    }

    return false;
  }
  function isValid(char, i, j, k) { 
    return (
      !hasShown.inRow[i].has(char) &&
      !hasShown.inCol[j].has(char) &&
      !hasShown.inBlk[k].has(char)
    );
  }
  function fill(char, i, j, k) {
    if (char === '.') {
      hasShown.inRow[i].delete(board[i][j]);
      hasShown.inCol[j].delete(board[i][j]);
      hasShown.inBlk[k].delete(board[i][j]);
    } else {
      hasShown.inRow[i].add(char);
      hasShown.inCol[j].add(char);
      hasShown.inBlk[k].add(char);
    }
    board[i][j] = char;

    return;
  }
}
function cordToBlkIndex(i, j) {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
}
function genHasShown(board) {
  const hasShownInRow = new Array(9).fill(null).map(_ => new Set());
  const hasShownInCol = new Array(9).fill(null).map(_ => new Set());
  const hasShownInBlk = new Array(9).fill(null).map(_ => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      
      const k = cordToBlkIndex(i, j);

      hasShownInRow[i].add(board[i][j]);
      hasShownInCol[j].add(board[i][j])
      hasShownInBlk[k].add(board[i][j]);
    } 
  }

  return {
    inRow: hasShownInRow,
    inCol: hasShownInCol,
    inBlk: hasShownInBlk,
  };
};