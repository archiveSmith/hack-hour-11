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

'use strict'

function bestProfit(stock_prices_yesterday) {
  if (!stock_prices_yesterday) {
    return 0;
  }
  
  let spArr = stock_prices_yesterday;
  let lp = stock_prices_yesterday[0];
  let lt = 0;
  let hp = stock_prices_yesterday[0];
  let ht = 0;
  let maxProfit = 0;
  let newHighHit = 0;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (spArr[i] < lp || newHighHit) {
      lp = spArr[i];
      newHighHit = 0;
    }
    
    if (spArr[i] > hp) {
      hp = spArr[i];
      newHighHit = 1;
      maxProfit = hp - lp;
    }
  }
  
  if (maxProfit <= 0) {
    return 0;
  }
  
  return maxProfit;
}

module.exports = bestProfit;