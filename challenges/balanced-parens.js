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

 function matchParens(openParens, closedParens) {
  if (openParens === '(' && closedParens === ')') {
    return true;
  } else if (openParens === '{' && closedParens === '}') {
    return true;
  } else if (openParens === '[' && closedParens === ']') {
    return true;
  }

  return false;
}

function balancedParens(input) {

  const strippedInput = input.replace(/[^\[\]\(\){}]/g, '');
  const len = strippedInput.length;

  if (len <= 1) {
    return true;
  }

  const stack = [];

  for (let i = 0; i < len; i += 1) {
    if (/[\[\({]/.test(strippedInput[i])) {
      stack.push(strippedInput[i]);
    } else {
      const popped = stack.pop();

      if (!matchParens(popped, strippedInput[i])) {
        return false;
      }
    }
  }

  return !stack.length;
}


module.exports = balancedParens;
