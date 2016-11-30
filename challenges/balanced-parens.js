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
  // // Step 2
  // let lparen = 0;
  // let rparen = 0;
  // let lsquare = 0;
  // let rsquare = 0;
  // let lcurly = 0;
  // let rcurly = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === '(') {
  //     lparen += 1;
  //   }
  //   if (input[i] === ')') {
  //     if (lparen > rparen) {
  //       rparen += 1;
  //     } else {
  //       return false;
  //     }
  //   }
  //   if (input[i] === '[') {
  //     lsquare += 1;
  //   }
  //   if (input[i] === ']') {
  //     if (lsquare > rsquare) {
  //       rsquare += 1;
  //     } else {
  //       return false;
  //     }
  //   }
  //   if (input[i] === '{') {
  //     lcurly += 1;
  //   }
  //   if (input[i] === '}') {
  //     if (lcurly > rcurly) {
  //       rcurly += 1;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // if (lparen === rparen && lsquare === rsquare && lcurly === rcurly) return true;
  // return false;

  // Step 1
  let lparen = 0;
  let rparen = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      lparen += 1;
    }
    if (input[i] === ')') {
      if (lparen > rparen) {
        rparen += 1;
      } else {
        return false;
      }
    }
  }
  if (lparen === rparen) return true;
  return false;
}

module.exports = balancedParens;
