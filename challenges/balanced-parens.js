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
  const brackets = '[](){}';
  let i = 0;
  let len = input.length;
  let closing = [];
  for (i; i < len; i += 1){
    //Check for opening brackets and push expected closing bracket into array
    let bracketIndex = brackets.indexOf(input[i]);
    if (bracketIndex > -1 && bracketIndex % 2 === 0){
      closing.push(brackets[bracketIndex+1]);
    }
    // Check if closing brackets are the expected character
    else if (bracketIndex > -1 && bracketIndex % 2 !== 0){
      if (input[i] !== closing.pop()) {return false;}
    }
  }
  return closing.length === 0 ? true : false;
}

module.exports = balancedParens;
