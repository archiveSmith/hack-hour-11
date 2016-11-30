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
  function balancedParens(input){
  let bracketCount = { '{' : 0, '}': 0, '[': 0, ']': 0, '(': 0, ')': 0}
  JSON.stringify(input);
  let truthyFinder = 0;
  for (let i = 0; i < input.length; i++) {
    if (bracketCount.hasOwnProperty(input[i])) {
      bracketCount[input[i]] += 1;
    }
  }
  for (let key in bracketCount) {
    truthyFinder += bracketCount[key]
  }
  if(truthyFinder % 2 !== 0){
    return false
  }
  return true;
}
}




module.exports = balancedParens;
