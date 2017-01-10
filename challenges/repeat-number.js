/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 function repeatNumbers(array) {
 let cache = {};
 let num = 0;

   for(let i = 0; i < array.length; i += 1) {
     if(cache.i){
       num = array[i];
     }
     cache.i = i
   }


 return num;
 }

 
module.exports = repeatNumbers;
