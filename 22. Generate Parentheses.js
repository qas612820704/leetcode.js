/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) { /* beats 91.61 % */
  if (n === 0) return [''];
  if (n === 1) return ['()'];

  var result = [];

  for (var i=0; i<n; i++) {
    generateParenthesis(i).forEach(function(inner) {
      generateParenthesis(n-i-1).forEach(function(outer) {
        result.push(`(${inner})${outer}`);
      })
    })
  }

  return result;
};
