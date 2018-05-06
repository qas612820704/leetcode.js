/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 0) return digits;

  digits[digits.length - 1] += 1;

  if (digits[digits.length - 1] < 10) return digits;

  digits[digits.length - 1] = 0;

  let carry = 1;
  for (let i = digits.length - 2; i >= 0; i--) {
    if (carry === 0)
      break;

    digits[i] += carry;

    carry = 0;

    if (digits[i] >= 10) {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry) {
    digits.unshift(1);
  }

  return digits;
};
