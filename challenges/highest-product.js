/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


 /*

take products of every possibility of 3 things multiplied together. 
returns the highest one.
if less than 3, return 0
//forloop....
//some math function that gives me an array of all of the possiblities....
//
//loop through each array and find all different possiblities of 3

assign a grouping of 3 to new variable 

123
124
125
126
127
128
132
134
135
136
137
138


need it to run through array and continue 


 */

 let arr = [1,3,4,1,1,2,3]



function highestProduct(array) {

	const newArr = array.sort(function(a,b){
		return a-b;
	});

	return (newArr[newArr.length-1] * newArr[newArr.length-2] * newArr[newArr.length-3]);

	

}

console.log(highestProduct(arr))


//module.exports = highestProduct;
