"use strict";
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
  if(!stock_prices_yesterday) return 0;
  let len = stock_prices_yesterday.length;
  console.log("stock_prices_yesterday: ", stock_prices_yesterday);
  if(len < 2) return 0;
  let profit = -Infinity;
  let diff = -Infinity;

  for(let i = 0; i < len - 1; i++){
    diff = stock_prices_yesterday[i + 1] - stock_prices_yesterday[i];
    profit = diff > profit ? diff : profit;
    console.log(profit);
  }

  return profit > 0 ? profit : 0;
}

let arr = [];

for(let i = 0; i < 60; i++){
  arr[i] = Math.floor((Math.random() * 1000) + 1);
}
bestProfit(arr);

module.exports = bestProfit;
