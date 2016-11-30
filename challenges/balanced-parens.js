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
  tally.forEach(x => {
    counter[x] = counter[x] + 1 || 1;
  });
  // CHECK IF VALUES ARE EVEN, WHICH MEANS THEY ARE PAIRED
  const keys = Object.keys(counter);
  if (counter['['] !== counter[']']) return false;
  if (counter['{'] !== counter['}']) return false;
  if (counter['('] !== counter[')']) return false;
  // RETURN TRUE IF ALL PASS
  return true;
}

module.exports = balancedParens;
