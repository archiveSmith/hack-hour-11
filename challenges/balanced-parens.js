/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

//split up string into array....
//loop through it, when you find a type of bracket, loop through rest of array
//if you find closing great, else return false
//loop again



	let newInput = input.split("");
	for (var i = 0; i < newInput.length; i++){
		if (newInput[i] === "["){
			for (var j = i; j < newInput.length; j++){

				if (newInput[j] === "]"){
					console.log("hi")
					
				}
				


			}
			return true
		}

	}
}









console.log(balancedParens('[]'));
module.exports = balancedParens;
