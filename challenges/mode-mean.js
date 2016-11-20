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
  let modeCount = {};
  array.forEach(function(n){
	  return modeCount[n] === undefined? modeCount[n] = 1: modeCount[n]++;
  });
  let compareMode = {
      'nums':0, 'times':0
      };
    for(let key in modeCount){
      if(compareMode.nums < modeCount[key]){
        compareMode.nums = key;
        compareMode.times = modeCount[key];
      }
    }
  let mode = parseInt(compareMode.nums);
  console.log(mode)
  let redArr = array.reduce(function(acc, curr){
	 return acc + curr;
  });
	let mean = Math.floor(redArr/2);
	console.log(mean)
 if(mode === mean){
   return true;
 }else{
   false;
 }
}

module.exports = modemean;
