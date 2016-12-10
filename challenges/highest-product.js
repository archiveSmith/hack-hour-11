/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3) return 0;
// 	let arr = array.sort((a,b) => b-a);
// 	console.log(arr);
	let abArr = array.sort((a,b) => Math.abs(b)-Math.abs(a));
	console.log(abArr);

if(abArr[0] >= 0 && abArr[1] >= 0 && abArr[2] >= 0){
  return abArr[0] * abArr[1] * abArr[2];
}

if((abArr[0] < 0 && abArr[1] < 0 && abArr[2] >= 0) || (abArr[0] >= 0 && abArr[1] < 0 && abArr[2] < 0) || (abArr[0] < 0 && abArr[1] >= 0 && abArr[2] < 0)) {
  return abArr[0] * abArr[1] * abArr[2];
} else {
  let threes = [abArr[0],abArr[1],abArr[2]];
  let others = abArr.splice(3);
  threes.sort((a,b) => a-b);
  console.log(threes)
  
}
	//return arr[0] * arr[1] * arr[2];
}



module.exports = highestProduct;
