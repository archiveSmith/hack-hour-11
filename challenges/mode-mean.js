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
<<<<<<< HEAD
let sorted = array.sort();
let most = 1;
let count = 0;
let moded = sorted[0];
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
return mean === moded;
}



module.exports = modemean;
=======

}

module.exports = modemean;
>>>>>>> e5028ff0e5aac5e362c4d8ac99cdb5929204c68c
