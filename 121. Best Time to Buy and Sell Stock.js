/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { /* beats 65.73% */
  return prices
    .reduce(({ min, profit }, price) => ({
      min: Math.min(min, price),
      profit: Math.max(profit, price - min)
    }) ,{
      min: Infinity,
      profit: 0,
    })
    .profit;
};
