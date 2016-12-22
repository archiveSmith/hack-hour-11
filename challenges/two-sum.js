/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   arr = arr.sort(function(a, b){
     return a - b;
   })
   if(arr[0] === undefined) return false;
   for (let i = 0; i < arr.length; i++) {
     if(arr[0] + arr[i] === n){
       return true
     }
   }
   arr.shift();
   
   return twoSum(arr, n)
 }

module.exports = twoSum;
