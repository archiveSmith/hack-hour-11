/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

// function getAllProducts(array) {
// 	if(array.length <= 1) return undefined;
// 	let count = 0;
// 	let sum = 1;
// 	let work = array.slice();
// 	let answer = [];
// 	while(count < array.length){
// 		work.splice(count,1);
// 		for(let i = 0; i < work.length; i++){
// 			sum = sum * work[i];
// 		}
// 		answer.push(sum)
// 		count++;
// 		work = array.slice();
// 		sum = 1;
// 	}	
// 	return answer;
// }

function getAllProducts(array, answer = [], count = 0) {
  if(!array || array.length < 2) return 0;
	if(count === array.length)  return answer;
	let a = array.slice();
	a.splice(count,1)
	count++;
	answer.push(a.reduce((acc, ele) => acc = acc*ele, 1));
	return getAllProducts(array, answer, count);
	
}








module.exports = getAllProducts;
