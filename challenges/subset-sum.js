/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function subsetSum(array, target) {
   array = array.sort(function(a,b){
     return a - b;
   })

   if (array.length === 0) return false;
     let i = array.length - 2;
     let firstNum = array[array.length - 1];
     while( i > 0) {
       if(firstNum + array[i] > target || firstNum + array[i] < firstNum) {
         i--;
       }  if (firstNum + array[i] < target) {
         firstNum += array[i]
         i--;
       }  if (firstNum + array[i]=== target || firstNum === target) {
         return true;
       }
     }
     array.pop()
     return subsetSum(array, target);
 }

module.exports = subsetSum;
