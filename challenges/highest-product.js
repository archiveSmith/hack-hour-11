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

 let arr = [1,2,3,4,5,6,7,8]



function highestProduct(array) {

	let highProd = 0;

	if (array.length < 3){
		return 0
	}

	else{

		for (var i = 0; i < array.length; i++){
			let product = array[i]*array[i+1]*array[i+2];
			if (product> highProd){
				highProd = product;
			}
		}


	}
	return highProd;


}


module.exports = highestProduct;
