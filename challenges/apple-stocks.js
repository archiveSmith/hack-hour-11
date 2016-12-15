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

    if (typeof stock_prices_yesterday[0] !== 'number'){
        return 0;
    }
    
    let stocks = stock_prices_yesterday;

    //avGrowth is what you could make letting it sit in the market
    //thus anything less than this is not worth the effort of day trading

    let avGrowth = stocks[0] * .08;

    let firstBuy = stocks[0];

    for (let i = 1; i < stocks.length; i++){
        if (typeof stocks[i] !== 'number'){
            return 0
        }
        let profit= stocks[i] - firstBuy;
        if (profit > avGrowth){
            return profit;
        }
    }
    return 0;
 
}

module.exports = bestProfit;
