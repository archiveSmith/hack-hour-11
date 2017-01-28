/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n, opts = [], build = '') {
	let options = opts;
	// let numSteps = 0;
	//let build = [];

	if(n < 1){
		if(n<0)return options;
		let a = build
		let isIt = false;
		for(let i = 0; i < options.length; i++){
			if(options[i].match(a) === -1){
				isIt = true;
				break;
			}
		}
		if(!isIt) options.push(build);
		return options;
	}
	 let c = build += '1'
   let d =  build += '2'
	countStairs(n-1, options, c)
	countStairs(n-2, options, d)



return options.length;
}


module.exports = countStairs;
