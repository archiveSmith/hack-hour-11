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
 
  function bestProfit(arr) {
  //return max - min and make sure indexes are aligned so min comes before max
  
  let min = arr.indexOf(Math.min(...arr));
  let max = arr.indexOf(Math.max(...arr))
  
  if(min === arr.length - 1) {
    arr.pop();
    min = arr.indexOf(Math.min(...arr));
    bestProfit(arr)
  }
  
  if(min > max) {
    arr.splice(arr[min], 1);
    bestProfit(arr)
  }
  
  else {
    return (arr[max] - arr[min])
  }
  
}


module.exports = bestProfit;
