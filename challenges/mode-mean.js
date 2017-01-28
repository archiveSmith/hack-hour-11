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

//mean is the traditional average
//mode is the most elements 

//take the mean and mode of the array. 
//take floor of mean
//take max of mode 
//compare them

function modemean(array) {

	//take mode, filter out duplicates 

	//create an object. push each num to object. return out largest number 

	let modeObj = {};

	array.forEach(function(val){
		if (modeObj.hasOwnProperty(val)){
			modeObj[val]++
		}
		else {
			modeObj[val] = 1;
		}
	})

	

	//not calculating biggest mode...just mode..go back if you can to figure this out. 

	let bigMode = 0

	for (let key in modeObj){
		if (modeObj[key] > bigMode){
		bigMode = modeObj[key];
		}
	}

	//we have big mode now, now we can loop back through where the object val equals the object val of the mode
	//if key at that elents is bigger, return it. 

	let biggerMode = [];

	for (let key in modeObj){
		if (modeObj[key] === bigMode){
			biggerMode.push(parseInt(key));
		}
	}

	biggerMode = biggerMode.sort(function(a,b){
		return a-b
	});

	let finalMode = biggerMode[biggerMode.length-1];

	//above this calculate max of mode if possible 

	let sum = array.reduce(function(accum, curr){
		return accum + curr;
	})

	let mean = Math.floor(sum/array.length);

	
	return mean === finalMode


}



module.exports = modemean;
