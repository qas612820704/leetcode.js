/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  const lenHalf = Math.floor(matrix.length / 2);
  for (let i = 0; i < lenHalf; i += 1) {
    for (let j = i; j < len - i - 1; j += 1) {

      const tmp = matrix[i][j];
      matrix[i          ][j          ] = matrix[len - 1 - j][i          ];
      matrix[len - 1 - j][i          ] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j          ][len - 1 - i];
      matrix[j          ][len - 1 - i] = tmp;
    }
  }
};
