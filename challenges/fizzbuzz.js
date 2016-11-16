// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]


//while with a counter
//while if counter logic push it it new array


function fizzbuzz(num) {
	
	if (num.constructor !== Number){
		alert("You should only input numbers!!")
	}
	let counter = num;

	let array = [];

	while (counter > 0){
		
		if (counter % 3 === 0 && counter % 5 === 0){
			array.push("fizzbuzz")
		}
		else if (counter % 5 === 0){
			array.push("buzz")
		}
		else if (counter % 3 === 0){
			array.push("fizz")
		}
		else {
			array.push(counter)
		}
		counter--
	}
	return array;

}

module.exports = fizzbuzz;
