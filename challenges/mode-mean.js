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
// set average
let average = array.reduce(function(accum, curr) {
	accum = accum + Math.floor(curr);
});
let newArr = [];

// set mode
let mode = array[0];
function setMode(array) {


for(let i = 0; i < array.length; i++) {
	if()
}

if(average === mode) {
	return true;
}
return false;

}


module.exports = modemean;
