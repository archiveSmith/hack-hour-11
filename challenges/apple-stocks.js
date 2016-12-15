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

function bestProfit(stock) {
  let max = stock[0]
  let min = stock[0]
  let profitArr = [0];
  let maxKeys = [0];
  let minKeys = [0];
  for (let i = 1; i < stock.length; i++) {
    if (stock[i] - min > profitArr[profitArr.length - 1] ) {
      console.log('max')
      max = stock[i]
      maxKeys.push(i);
      profitArr.push(stock[i] - min);
    } else if (stock[i] < min) {
      console.log('min')
      min = stock[i];
      minKeys.push(i);
    }
  }
  return Math.max.apply(null, profitArr)
}
module.exports = bestProfit;