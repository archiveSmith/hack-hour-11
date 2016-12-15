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
	if(!stock_prices_yesterday || !Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;
	for(let i = 0; i < stock_prices_yesterday.length; i++){
		if(typeof stock_prices_yesterday[i] !== 'number'){
			return 0;
		}
	}
  let a = stock_prices_yesterday.slice();
  let b = stock_prices_yesterday.slice();
	let max = stock_prices_yesterday.indexOf(Math.max(...stock_prices_yesterday));
	let min = stock_prices_yesterday.indexOf(Math.min(...stock_prices_yesterday));
	let maxCheck1 = max;
	let minCheck1 = min;
	let options = [];
	while(maxCheck1 < minCheck1){
		a.splice(maxCheck1,1);
		maxCheck1 = a.indexOf(Math.max(...a));
		minCheck1 = a.indexOf(Math.min(...a));
	}
	options.push(a[maxCheck1] - a[minCheck1]);
	maxCheck1 = stock_prices_yesterday.indexOf(Math.max(...stock_prices_yesterday));
	minCheck1 = stock_prices_yesterday.indexOf(Math.min(...stock_prices_yesterday));
	console.log(stock_prices_yesterday)
	while(minCheck1 > maxCheck1){
		b.splice(minCheck1,1);
		maxCheck1 = b.indexOf(Math.max(...b));
		minCheck1 = b.indexOf(Math.min(...b));
	  console.log(minCheck1)
	
	}
	
	options.push(b[maxCheck1] - b[minCheck1]);
  //console.log(options);


	return Math.max(...options);
}

module.exports = bestProfit;
