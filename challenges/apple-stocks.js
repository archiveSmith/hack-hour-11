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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  let maxProfit = 0;
  let low = 0;
  let high = 0;
  stock_prices_yesterday.forEach((buy, time, allDay) => {
    if (typeof buy !== 'number') return 0;
    allDay.slice(time).forEach(sell => {
      if (typeof sell !== 'number') return 0;
      if (sell - buy > maxProfit) {
        maxProfit = sell - buy;
      }
    });
  });
  return maxProfit;
}

const prices = [15, 8, 3, 5, 21, 11, 1]; // 17

console.log(bestProfit(prices));



module.exports = bestProfit;
