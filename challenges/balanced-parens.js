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


	let newInput = input.split("");
	

	const openClose = [];

	for (let i = 0; i < newInput.length; i++){
		if (newInput[i] === "{" || newInput[i] === "(" || newInput[i] === "[" ||newInput[i] === "}" || newInput[i] === ")" || newInput[i] === "]"){
			openClose.push(newInput[i])
		};
		if (openClose[openClose.length-1] === "}" && openClose[openClose.length-2] === "{" || openClose[openClose.length-1] === "]" && openClose[openClose.length-2] === "[" || openClose[openClose.length-1] === ")" && openClose[openClose.length-2] === "("){
			openClose.pop();
			openClose.pop();
		};

	}
	if (openClose.length > 0){
		return false
	}
	return true
}









console.log(balancedParens('[(]{)}'));
//module.exports = balancedParens;
