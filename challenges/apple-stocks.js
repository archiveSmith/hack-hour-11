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
  let original = stock_prices_yesterday[0];
  console.log(original);
  let lp = stock_prices_yesterday[0];
  let lt = 0;
  let hp = stock_prices_yesterday[0];
  let ht = 0;
  let maxProfit = 0;
  let newHighHit = 1;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (spArr[i] < lp || newHighHit) {
      lp = spArr[i];
      hp = spArr[i];
      newHighHit = 0;
    }
    
    if (spArr[i] > hp) {
      hp = spArr[i];
      newHighHit = 1;
      if (hp - lp > maxProfit) {
      	maxProfit = hp - lp;
      }
    }
  }
  
  if (maxProfit <= 0 || original > maxProfit) {
    return 0;
  }
  
  return maxProfit;
}

//const spy = [1000, 300, 290, 287, 1, 5000, 269, 269, 246, 230, 234, 236, 240, 289, 320, 45, 44, 43, 429, 300, 271, 1000, 4, 1000, 251];
//console.log(bestProfit(spy));

module.exports = bestProfit;