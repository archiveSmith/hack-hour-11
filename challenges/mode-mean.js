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
let sorted = array.sort();
let most = 0;
let count = 0;
let mode = 0;
for(let i = 0; i < array.length; i++){
	if(array[i] === array[i+1]){
		count++;
	}
	if(array[i] !== array[i-1]) {
	  if(count === most){
	    count = 0;
	    if(moded < array[i-1]){
	      moded = array[i-1];
	    }
	  }
		if(count > most){
			most = count;
			count = 0;
			moded = array[i-1];
		} else {
			count = 0;
		}

	}
}

let total = array.reduce((acc, ele) => acc + ele);
let mean = total / array.length;
return mean === mode;
}



module.exports = modemean;