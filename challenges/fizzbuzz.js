// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers 
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 
//                     11, 'fizz', 13, 14, 'fizzbuzz', 16 ]

function fizzbuzz(num) {
  
  if (num < 1) {
    return "Please enter a valid number."
  }
  
  let i=1;
  let len=num;
	
  let result = "";
  const resultArray = [];
  
  if (num === 1) {
    resultArray[0] = 1;
  }
  
	for (i; i<=len; i++) {
		if (i%3 === 0) {
			result += "fizz";
		}
		if (i%5 === 0) {
			result += "buzz";
		} 
	    if (i%3 !== 0 && i%5 !== 0) {
	      result = i;
	    }
		resultArray.push(result);
		result = "";
	}
  
  return resultArray;

}

console.log(fizzbuzz(16)); //returns [ 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", 
//                                     "buzz", 11, "fizz", 13, 14, "fizzbuzz" ]

module.exports = fizzbuzz;
