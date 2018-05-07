/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array(n).fill(undefined).map((_, i) => {
    const num = i + 1;
    let val = '';

    if (num % 3 === 0)
      val += 'Fizz';

    if (num % 5 === 0)
      val += 'Buzz';

    return val || num.toString();
  })
};
/* beats 42.25% */

var fizzBuzz = function(n) {
  const map = [0, 0, "Fizz", 0, "Buzz", "Fizz", 0, 0,
               "Fizz", "Buzz", 0, "Fizz", 0, 0, "FizzBuzz"];
  return Array(n).fill(undefined).map((_, i) => map[i % map.length] || (i + 1).toString());
};
/* 99.29% */
