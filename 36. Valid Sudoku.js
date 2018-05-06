/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  return isValidRows(board) && isValidCols(board) && isValidBlocks(board);
};

var isUniq = function(args) {
  const isApear = new Array(10).fill(false);

  return args.every(num => {
    if (num === '.') return true;

    if (isApear[num - '0']) return false;

    return isApear[num - '0'] = true;
  })
}

var isValidRows = function(board) {
  return board.every(row => isUniq(row));
}

var isValidCols = function(board) {
  const cols = board.map((_, i) => board.map(row => row[i]));
  return cols.every(col => isUniq(col));
}

var isValidBlocks = function(board) {
  const blocks = board.map((_, i) => {
    const startI = Math.floor(i / 3) * 3;
    const startJ = (i * 3) % 9;

    return [
      ...board[startI    ].slice(startJ, startJ + 3),
      ...board[startI + 1].slice(startJ, startJ + 3),
      ...board[startI + 2].slice(startJ, startJ + 3)
    ]
  })

  return blocks.every(block => isUniq(block));
}
