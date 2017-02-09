// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
	var round = {};
	var common = {};
	var ce = [];

	for (var i = 0; i < array1.length; i++) {
		if (!round[array1[i]]) {
			round[array1[i]] = 1;
		}
	}

	for (var key in round) {
		if (!common[key]) {
			common[key] = 0;
		}
		common[key] += round[key];
	}

	round = {}

	for (var i = 0; i < array2.length; i++) {
		if (!round[array2[i]]) {
			round[array2[i]] = 1;
		}
	}

	for (var key in round) {
		if (!common[key]) {
			common[key] = 0;
		}
		common[key] += round[key];
	}

	round = {}

	for (var i = 0; i < array3.length; i++) {
		if (!round[array3[i]]) {
			round[array3[i]] = 1;
		}
	}

	for (var key in round) {
		if (!common[key]) {
			common[key] = 0;
		}
		common[key] += round[key];
	}

	round = {}

	for (var i = 0; i < array4.length; i++) {
		if (!round[array4[i]]) {
			round[array4[i]] = 1;
		}
	}

	for (var key in round) {
		if (!common[key]) {
			common[key] = 0;
		}
		common[key] += round[key];
	}

	console.log(round);
	console.log("common: ", common);

	for (var key in common) {
		if (common[key] >= 4) {
			ce.push(key);
		}
	}

	if (!ce.length) {
		return "Nothing in Common!";
	}

	return ce;
}

//Yes, I should refactor and consolidate founds into separate function!

// console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
