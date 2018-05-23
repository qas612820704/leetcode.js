/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) { /* beats 88.38 % */
  const digitMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  return digits
    .split('')  // to char array
    .map(digitStr => digitMap[digitStr - '0'].split(''))
    .reduce((accumulator, letters) =>
      accumulator.length === 0
        ? letters
        : [].concat(
            ...accumulator.map(str =>
              letters.map(l =>
                str.concat(l)
              )
            )
          )
      , [])
};
