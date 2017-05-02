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
  // if nothing provided
  if (!stock_prices_yesterday) return 0;

  // change the array name cause that is too long
  let data = stock_prices_yesterday,
  // make a minimum and a maximum container 
  // make a profit counter
    min = data[0],
    max = data[0],
    maxProfit = 0;

// loop through the array
  for (i = 0; i < data.length; i++) {
    // if the value is less than the min, make it new min.
    if (data[i] < min) {
      min = data[i]
    }
    
  // if the current value minus min is greater than our current profit
  // then it is our new profit, and the max value is the current value.
    if ((data[i] - min) > maxProfit) {
      max = data[i];
      maxProfit = data[i] - min;
    }
  }

  // when we finish looping, see if we have profit
  // if not, return 0, otherwise return our profit
  if (maxProfit <= 0) return 0;
  return maxProfit;
}

module.exports = bestProfit;
