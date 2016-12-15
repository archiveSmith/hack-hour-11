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
  //stock_prices_yesterday.sort();
  if (!stock_prices_yesterday) {
    return 0;
  }

  const len = stock_prices_yesterday.length;

  if (len === 1) {
    return 0;
  }

   let lo = stock_prices_yesterday[0];
  // let loIndex = 0;
   let hi = stock_prices_yesterday[0];
  // let hiIndex = 0;

  let maxProfit;

  for (let i = 1; i < len; i += 1) { 

    if (stock_prices_yesterday[i] > hi) {
      hi = stock_prices_yesterday[i];
      maxProfit = hi - lo;
    } else if (stock_prices_yesterday[i] < lo) {
      lo = stock_prices_yesterday[i];
    }

  }

  if (maxProfit > 0) {
    return maxProfit;
  } 

  return 0;
}

module.exports = bestProfit;
