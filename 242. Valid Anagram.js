/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const appearMap = s.split('').reduce((map, c) => {
    if (!map.has(c)) {
      map.set(c, 0);
    }

    map.set(c, map.get(c) + 1);

    return map;
  }, new Map());

  for (let i = 0; i < t.length; i += 1) {
    if (!appearMap.has(t[i]))
      return false;

    const remaindCnt = appearMap.get(t[i]) - 1;

    if (remaindCnt > 0) {
      appearMap.set(t[i], remaindCnt);
    } else {
      appearMap.delete(t[i]);
    }

  }

  return true;
};
