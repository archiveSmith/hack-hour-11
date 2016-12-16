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
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;
  // const len = stock_prices_yesterday.length;
  // let maxDif = 0;
  // for (let i = 0; i < len; i += 1) {
  //   for (let j = i + 1; j < len; j += 1) {
  //     const dif = stock_prices_yesterday[j] - stock_prices_yesterday[i];
  //     if (dif > maxDif) maxDif = dif;
  //   }
  // }
  // return maxDif;
  const max = Math.max(...stock_prices_yesterday);
  const maxIndex = stock_prices_yesterday.indexOf(max);
  const leftSide = stock_prices_yesterday.slice(0, maxIndex);
  const leftSideMin = Math.min(...leftSide);
  const leftSideDif = max - leftSideMin;

  const rightSide = stock_prices_yesterday.slice(maxIndex + 1);
  const rightSideMin = Math.min(...rightSide);
  const rightSideB = rightSide.slice(rightSide.indexOf(rightSideMin));
  const rightSideMax = Math.max(...rightSideB);
  const rightSideDif = rightSideMax - rightSideMin;

  return leftSideDif > rightSideDif ? leftSideDif : rightSideDif;
}

module.exports = bestProfit;
