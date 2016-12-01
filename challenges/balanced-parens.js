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
  // let fInput = input.match(/[\(\)\{\}\[\]]/g);    //fInput is an array
  let fInput = input.match(/[\(\)]/g);
  let count1 = 0, count2 = 0;
  if (fInput.length % 2 !== 0) return false;
  if (fInput[0] === ')') return false;
  for (let i = 0; i < fInput.length; i += 1) {
    (fInput[i] === '(') ? count1 += 1 : count2 += 1;
  }
  if (count1 !== count2) return false;

  for (let i = 0; i < fInput.length; i += 1) {
    if (fInput[i] === '(') {
      for (let j = i + 1; j < fInput.length; j += 1) {
         
      }
    }
  }

}

module.exports = balancedParens;
