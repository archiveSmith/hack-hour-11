/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(prices) {
  if (!Array.isArray(prices) || prices.length < 2) return 0;
  let maxDiff = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > maxDiff) {
      maxDiff = prices[i] - min;
    }
  }

  return maxDiff;
}

module.exports = bestProfit;
