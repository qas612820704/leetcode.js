/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphaStr = s.toLowerCase().replace(/[^0-9a-z]/g, '');

  return alphaStr === alphaStr.split('').reverse().join('');
};
