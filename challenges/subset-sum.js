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
  let sum = 0;
  let potentialAdditions= [];
  for (let start = 0; start < array.length; start++) {
    
      //create a smaller array with only numbers that can result in a sum of <= target
      potentialAdditions = array.filter(function(num){
        if (sum + num <= target) {
          return num;
        }
      });
      
      if (potentialAdditions.length) {
        //still a possibility of getting a subset sum
        for (let i = 0; i < potentialAdditions.length; i++) {
          if (sum + potentialAdditions[i] <= target) {
            sum = sum + potentialAdditions[i];
            console.log("Adding " + potentialAdditions[i] + " to "+ sum);
          }
        }
      } else {
        //there aren't any potential additions left -> return false;
        console.log("\n\nStarting!");
        sum = array[start];
      }
      
      console.log("current sum: ", sum);
      console.log("potentials: ", potentialAdditions);
  }
}

module.exports = subsetSum;
