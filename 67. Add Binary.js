/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length === 0) return b;
  if (b.length === 0) return a;

  if (a.length < b.length) {
    [ a, b ] = [ b, a ];
  }

  a = a.split('');
  b = b.split('');

  let i = a.length - 1;
  let j = b.length - 1;

  let carry = 0;
  while (i >= 0 || j >= 0) {
    if (!carry && j < 0) break;

    let numA = Number(a[i]);
    let numB = j >= 0 ? Number(b[j]) : 0;
    let digit = numA + numB + carry;

    carry = 0;

    if (digit >= 2) {
      digit = digit - 2;

      carry = 1;
    }

    a[i] = digit;

    i = i - 1;
    j = j - 1;
  }

  if (carry) a.unshift(1);

  return a.join('');
};
