/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> 2d5e6c3e4be4404efad54fee792c1e1a98feee46
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

<<<<<<< HEAD
 function subsetSum(array, target) {
   let num = target;
   let index = array.length - 1;

   function recursive(i, num) {
     if (num === 0) return true;
     else if (i === -1) return false;
     else {
       const subtracted = num - array[i];
       return recursive(i - 1, subtracted) || recursive(i - 1, num);
     }
   }
   return recursive(index, num)
 }
=======
function subsetSum(array, target) {

}
>>>>>>> 2d5e6c3e4be4404efad54fee792c1e1a98feee46

module.exports = subsetSum;
