/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   let len = arr.length;

   if (!len) {return false}

   let checker = (arr) => {
     for (let i = 1; i <= arr.length; i += 1) {
       if (arr.length === 1) {return false}
       else if (arr[0] + arr[i] === n) {return true}
       else if (i + 1 === arr.length) {
         let shifted = arr.shift();
         len -= 1;
         return checker(arr);
       }
     }
   };

   return checker(arr);

 }

module.exports = twoSum;
