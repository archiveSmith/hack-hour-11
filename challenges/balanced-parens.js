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
  //generate array with all non bracket characters removed
  const closeBracket = {
    "]": "[",
    "}": "{",
    ")": "("
  };
  const bracketArr = [];
  
  if (!input) {
    return false;
  }
  
  input = input.split("");
  
  input.forEach(function(char) {
    if (char === "(" || char === ")" || char === "[" || char === "]" || char === "{" || char === "}") {
      bracketArr.push(char);
    }
  });
  
  //check to make sure array is even length, if not a matching opening/closing bracket is missing and therefor not balanced -> return false
  if (bracketArr.length % 2 !== 0) {
    return false;
  }
  
  //loop through the array making sure every corresponding character on the opposite end is the correct closing bracket
  for (let i = 0; i < bracketArr.length/2; i++) {
    console.log("compare: ", i+": "+bracketArr[i], (bracketArr.length - 1 - i)+": "+ closeBracket[bracketArr[bracketArr.length - 1 - i]])
    if (bracketArr[i] !== closeBracket[bracketArr[bracketArr.length - 1 - i]]) {
      return false;
    }
  }
  
  return true;
}

module.exports = balancedParens;
