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

function getAllProducts(array) {
	let newArr = array;
	
 let arr = newArr.map((item)=>{
  return mult(item)
})

function mult(item){
	let ans = 1;
 	for(let i=0; i<array.length; i++){
 		item === array[i] ? ans *= 1 : ans *= array[i];
 	}
 		return ans
 }
 
return arr
}

module.exports = getAllProducts;
