/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) { /* beats 98.47 % */
  let cntLand = 0;

  grid.forEach((row, i) => {
    row.forEach((land, j) => {
      if (land === '1') {
        cntLand += 1;
        hydration(grid, i, j);
      }
    });
  })

  return cntLand;
};

var hydration = function(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) return;

  if (grid[i][j] === '0') return;

  grid[i][j] = '0';
  hydration(grid, i - 1, j);
  hydration(grid, i + 1, j);
  hydration(grid, i, j - 1);
  hydration(grid, i, j + 1);
};
