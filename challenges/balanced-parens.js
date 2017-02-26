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
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

function balancedParens(input) {
	if (typeof input !== 'string') return undefined;
  const opens = [];
  const len = input.length;

  for (let i = 0; i < len; i += 1) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') opens.push(input[i]);
    else if (input[i] === ')') {
      const last = opens.pop();
      if (last !== '(') return false;
    } else if (input[i] === ']') {
      const last = opens.pop();
      if (last !== '[') return false;
    } else if (input[i] === '}') {
      const last = opens.pop();
      if (last !== '{') return false;
    }
  }

  return opens.length === 0 ? true : false;

}

module.exports = balancedParens;