/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid === null || obstacleGrid.length === 0 || obstacleGrid[0].length === 0) return 0;

  const [ m, n ] = [ obstacleGrid.length, obstacleGrid[0].length ];

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  const dpTable = new Array(m).fill(0).map(_ => new Array(n));

  dpTable[0][0] = 1;

  for (let j = 1; j < n; j++) {
    dpTable[0][j] = (obstacleGrid[0][j] === 1)
      ? 0
      : dpTable[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    dpTable[i][0] = (obstacleGrid[i][0] === 1)
      ? 0
      : dpTable[i - 1][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dpTable[i][j] = (obstacleGrid[i][j] === 1)
        ? 0
        : dpTable[i - 1][j] + dpTable[i][j - 1]
    }
  }

  return dpTable[m - 1][n - 1];
};
