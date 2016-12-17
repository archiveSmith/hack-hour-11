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
  let spy = stock_prices_yesterday;
  if (!spy || !Array.isArray(spy)) return 0;
  let len = spy.length;
  let i = 0;
  let max = Infinity;
  let min = -Infinity;
   for (i; i < len; i += 1) { 
     if( spy[i] > max) max = spy[i];
     if(spy[i] < min) min = spy[i];
   }
   
}

module.exports = bestProfit;
//   const streaks = [];
//   for (i; i < len; i += 1) {
//     let streak = 0;
//       while (spy[i] < spy[i + 1]) {
//         streak += spy[i + 1] - spy[i];
//         i += 1;
//       }
//     streaks.push(streak);
//   }
//   let maxStreak = streaks.reduce((accum, curr) => {if (curr > )})
//   if (!streaks.length) return 0;