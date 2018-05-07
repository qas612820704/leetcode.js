/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];

  const ans = [];

  generateNthRow(numRows, (row) => ans.push(row));

  return ans;
};

var generateNthRow = function(n_th, update) {
  if (n_th === 1) {
    update([1]);
    return [1];
  }

  const prevRow = generateNthRow(n_th- 1, update);

  const row = [
    1,
    ...prevRow.slice(1).map((val, i) => prevRow[i] + val),
    1
  ]

  update(row);

  return row;
}

/* beats 98.30% */
