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

function balancedParens(input) {
  let count1 = 0;
  let count2 = 0;
  const newInput = [input];
  
  for (let i = 0; i < newInput.length; i += 1) {
    if (newInput[i] === '(') {
    count1++;
    } if (newInput[i] === ')') {
    count2++;
    }
  }
  if (count1 === count2) {
    return true;
  }
  return false;
}

// console.log(balancedParens(')('));

module.exports = balancedParens;
