/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 0) return null;
  if (n === 1) return '1';

  const prevSay = countAndSay(n - 1);

  const newSay = prevSay.split('').reduce((acc, num) => {
    if (num === acc.cur.key) {
      acc.cur.cnt += 1;
      return acc;
    }

    if (acc.cur.key !== null) {
      acc.ans += `${acc.cur.cnt}${acc.cur.key}`;
    }

    acc.cur = {
      key: num,
      cnt: 1,
    };

    return acc;
  }, { cur: {key: null, cnt: null}, ans: ''});

  return newSay.ans + `${newSay.cur.cnt}${newSay.cur.key}`;
};
