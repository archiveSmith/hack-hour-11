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
  const matching = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  const parens = [];
  for (let i = 0; i < input.length; i++) {
    console.log(parens);
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') parens.push(input[i]);
    if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (parens[parens.length - 1] === matching[input[i]]) parens.pop();
      else return false;
    }
  }
  if (parens.length === 0) return true;
  return false;
}

module.exports = balancedParens;
