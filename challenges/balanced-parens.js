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
   let countBracket = 0;
   let countParens = 0;
   for (let i = 0; i < input.length; i++) {
     if (input[i] === '(') countParens += 1;
     else if (input[i] === ')') {
       if (countParens > 0) countParens -= 1
       else return false;
     }
     else if (input[i] === '{') countBracket += 1;
     else if (input[i] === '}') {
       if (countBracket > 0) countBracket -= 1
       else return false;
     }
   }
   return countBracket === 0 && countParens === 0
 }

module.exports = balancedParens;
