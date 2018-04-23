/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;
  
  const [ m, n ] = [ grid.length, grid[0].length];
  
  const dpTable = new Array(m).fill(new Array(n));
  
  grid.forEach((row, i) => {
    row.forEach((value, j) => {
      let cost;

      if (i === 0 && j === 0)
        cost = value;
      else if (i === 0)
        cost = value + dpTable[0][j - 1];
      else if (j === 0)
        cost = value + dpTable[i - 1][0];
      else {
        cost = (dpTable[i][j - 1] < dpTable[i - 1][j])
          ? value + dpTable[i][j - 1]
          : value + dpTable[i - 1][j]
      }
      
      dpTable[i][j] = cost;
    });
  });
  
  return dpTable[m - 1][n - 1];
};