/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  const selStr = strs.shift();


  let len = 0;
  selStr.split('').some((c, i) => {
    for (let str of strs) {
      if ( i >= str.length || str[i] !== c) {
        return true;
      }
    }
    len = i + 1;
  });

  return selStr.slice(0, len);
};
