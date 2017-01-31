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
<<<<<<< HEAD
 strArr = input.match(/\[|\]|{|}|\(|\)/gi)

 let stack = [];
 
 for (var i = 0; i<strArr.length; i++) {
  if (strArr[i] === "[" || strArr[i] === "{" || strArr[i] === "(") {
      stack.push(strArr[i]);
  }
  if (strArr[i] === "]") {
      if (stack[stack.length-1] === "[") {
          stack.splice(0,stack.length-1);
      } else {
          return false;
      }
  } else if (strArr[i] === "}") {
       if (stack[stack.length-1] === "{") {
          stack.splice(0,stack.length-1);
      } else {
          return false;
      }
  } else if (strArr[i] === ")") {
       if (stack[stack.length-1] === "()") {
          stack.splice(0,stack.length-1);
      } else {
          return false;
      }
  }
 }
 if (stack.length === 0){
     return true;
 }
return false;
=======

>>>>>>> c2d85d98aadc865e5372179f960654118c7a2930
}

module.exports = balancedParens;
