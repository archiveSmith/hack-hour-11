/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

 function permPalin(str) {
   let palindromeObj = {};
   let counter = 0;
   let result = true;
   for (let i = 0; i < str.length; i++) {
     if(!palindromeObj[str[i]]) {
       palindromeObj[str[i]] = 1;
     } else {
       palindromeObj[str[i]]++;
     }
   }
   for (let key in palindromeObj) {
     if(str.length % 2 !== 0){
       if (palindromeObj[key] % 2 !== 0) {
       counter++;
     }
     if (counter > 1) {
       result = false;
     }
     }else {
       if (palindromeObj[key] % 2 !== 0) {
         result = false;
       }
     }

   }
   return result;
 }


module.exports = permPalin;
