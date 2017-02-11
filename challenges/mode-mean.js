/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 *///


function modemean(array) {
  let modeCounter = 0;
  let mode = null
  let modeArr = [];

  let mean = (array.reduce(function(prev, curr){
    return prev +curr;
    }))/ array.length;

  const modeObj = {};
  for (let i = 0; i<array.length; i++) {
  	if (modeObj[array[i]] !== undefined) {
      modeObj[array[i]] += 1;
    } else {
    modeObj[array[i]] = 0;
  }
  }
  
  for (let prop in modeObj){
    if (modeObj[prop] > modeCounter) {
    	modeCounter = modeObj[prop];
    	
    }
  }

  for (let prop in modeObj){
  	if (modeObj[prop] === modeCounter) {
  		modeArr.push(prop);
  	}
  }

modeArr.sort(function(a,b) {
	return a-b;
})

mode = modeArr[modeArr.length-1]

 if (Math.floor(mean) === parseInt(mode)) {
 	return true;
 } else {
 	return false;
 }
}

module.exports = modemean;
