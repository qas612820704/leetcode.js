/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;
  return prices
    .slice(1)
    .reduce((profit, nowPrice, i) => {
      const prevPrice = prices[i];

      return prevPrice < nowPrice
        ? profit + (nowPrice - prevPrice)
        : profit;
    },0);
};
