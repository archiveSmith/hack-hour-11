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
   const inputVal = input;
   const regex = /\(|\)|\[|\]|\{|\}/g;
   const filtered = inputVal.match(regex);
   let myArray = [];
   let myObj = {
     "(": ")",
     "[": "]",
     "{": "}"
   };
   let flag = false;
   myArray.push(filtered);
   let len = myArray[0].length;

   for (let i = 0; i <= len; i++) {
     let checker = myArray[0].indexOf(myObj[myArray[0][0]]);

     if (checker > 0) {
       myArray[0].splice(0, 1);
       myArray[0].splice(checker - 1, 1);
       len -= 2;
     }

     if (len === 0) {
       flag = true;
     }

   }

   return flag;
 }

module.exports = balancedParens;
