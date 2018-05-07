/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { /* beats 99.29% */
  const romanMap = {
    undefined: 0,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  return s.split('').reduce((val, c, i, ary) => {
    const curVal = romanMap[c];
    const nextVal = romanMap[ary[i + 1]];

    return curVal < nextVal ? val - curVal : val + curVal;
  }, 0);

};
