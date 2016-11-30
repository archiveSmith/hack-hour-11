'use strict';
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

let brackets = { "[": "]", "{": "}", "(": ")"};
let values = { "]": "[", "}": "{", ")": "("};

function balancedParens(input){
	return input.split("").reduce((open, char, index, array) =>{
		if(char in brackets){ open.unshift(brackets[char]) }

		if(char == open[0]){
		  open.shift(); 
		}else if(char in values){
		  open.unshift(char);
		}

		return open;

	}, []).length === 0;


}
//console.log(balancedParens('[({)})]'));
module.exports = balancedParens;
