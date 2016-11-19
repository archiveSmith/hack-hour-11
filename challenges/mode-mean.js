/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	let mean = array.reduce(function(saved, curr){
		return saved + curr;
	}, 0)/array.length;

	let store = array.reduce(function(store, curr){
		store[curr] = store[curr] === undefined ? 1 : store[curr] + 1;
		return store;
	},{});
	
	let mode = Object.keys(store).reduce(function(largest, curr){
		return store[largest] < store[curr] ? curr : largest;
	});
	
	return Math.floor(mean) === parseInt(mode);
}

module.exports = modemean;
