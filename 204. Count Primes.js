/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) { /* beats 86.98% */
  if (n === 0 || n === 1) return 0;

  const isPrime = Array(n).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  const scanEnd = Math.ceil(Math.sqrt(n));

  for (let number = 2; number < scanEnd; number += 1) {
    if (isPrime[number] === false) continue;

    for (let multiple = 2 * number; multiple < n; multiple += number) {
      isPrime[multiple] = false;
    }
  }

  return isPrime.filter(yes => yes).length;
};
