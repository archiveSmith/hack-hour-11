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
    let l = spy.length;
    let max = Math.max(...spy);
    let min = Math.min(...spy);
    let placeMax, placeMin;
    for(let i =0; i<l; i++){
      if(spy[i] === max && placeMin < i){
        placeMax = i;
      }else if(spy[i] === min){
        placeMin = i;
      }else if( placeMin > i){
        return 0;
      }
    }
      return max-min;
}


module.exports = bestProfit;
