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
  if (!input) return false;

 const storage = [];
  const pairs = {
    '[':']',
    '{':'}',
    '(':')'
  };
  const closers = {
    ')': 1,
    ']': 1,
    '}': 1
  };
  
  //loop through the string
  for(let i = 0; i < input.length; i++){
    let cur = input[i];
    // if we hit a paren, push it to storage
    if(pairs[cur]){
      storage.push(pairs[cur]);
    } 
    // if we hit a closing paren, we see if it's opener exists in storage
    // if it does, we pop it out of the storage
    // if it doesn't we return false
    else if(cur in closers){
      if(storage[storage.length -1] === cur){
        storage.pop();
      } else{
        return false;
      }
    }
  }
  // if true, storage should be empty, so this boolean should return true;
  return !storage.length;
}

module.exports = balancedParens;
