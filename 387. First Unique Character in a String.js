/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charList = s.split('');

  const appearCnt = charList.reduce((map, c, i) => {
    if (!map.has(c)) {
      map.set(c, 0);
    }

    map.set(c, map.get(c) + 1);

    return map;
  }, new Map());

  for (let i = 0; i < charList.length; i += 1) {
    if (appearCnt.get(charList[i]) < 2) return i;
  }

  return -1;
};
