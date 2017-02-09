// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']



// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){

	let arrays = Array.from(arguments);

	let newArr = arrays.reduce(function(accum,curr){
		 temp = [];
		curr.forEach(function(val){

			if (accum.indexOf(val) !== -1){
				temp.push(val)

			}
		})

		accum = temp;
		return accum;

	})
	
	const cache = {};

	for (let i = 0; i < newArr.length; i++){
		if (!cache[newArr[i]]){
			cache[newArr[i]] = 1
		}
		else {
			newArr.splice(i,1)
		}

	}
	if (newArr.length === 0){
		return "Nothing in Common!"
	}
	else {
		return newArr;
	}
	


}

console.log(commonElements(array1,array2, array3, array4))

module.exports = commonElements;
