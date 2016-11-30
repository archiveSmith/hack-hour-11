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
  // COUNT HOW MANY OF EACH PARENTS
  const counter = {};
  // FILTER OUT EVERY OTHER CHAR
  const test = '[](){}';
  const tally = input
    .split('')
    .filter(x => test.split('').includes(x));
  // EARLY CHECK FOR ODD NUMBER OF PARENTS
  if (tally.length % 2 !== 0) return false;
  // MATCH PAIRS AND REPLACE
  const result = tally.map(x => {
    switch(x) {
      case ']':
        return '['
      case ')':
        return '('
      case '}':
        return '{'
      default:
        return x;
    }
  });
  // POPULATE COUNTER
  result.forEach(x => {
    counter[x] = counter[x] + 1 || 1;
  });
  // CHECK IF VALUES ARE EVEN, WHICH MEANS THEY ARE PAIRED
  const keys = Object.keys(counter);
  for (let i = 0; i < keys.length; i ++) {
    if (counter[keys[i] % 2 !== 0]) return false;
  }
  // RETURN TRUE IF ALL PASS
  return true;
}

module.exports = balancedParens;
