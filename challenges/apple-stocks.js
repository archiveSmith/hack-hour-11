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
if (stock_prices_yesterday) {
    return 0;
}
let lowest = +infinity;
let highest = -infinity;
for (let i = 0; i < stock_prices_yesterday.length; i+=1) {
    if (stock_prices_yesterday[i] > highest) {
        highest = stock_prices_yesterday[i];
    }
    if (stock_prices_yesterday[i] < lowest) {
        lowest = stock_prices_yesterday[i];
    }
}

if (lowest === highest || highest < lowest) {
    return 0;
}

return highest-lowest;
}

module.exports = bestProfit;
