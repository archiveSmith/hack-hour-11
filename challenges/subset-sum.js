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
  let arr = array;
  arr.sort((a, b) => a - b);
  arr[arr.length-1] >= target ? arr.splice(arr.length-1, 1): arr;
  let addedArr = arr.reduce((acc, curr) => acc += curr, 0);
  addedArr = addedArr - target;
  
  if(addedArr === 0){
    return addedArr === 0;
  }else if(arr.filter((value) => value === addedArr)[0] === addedArr){
      console.log(arr.filter((value) => value === addedArr))
      return true;
  }else{
      let last = arr.map((item) => item > addedArr ? item = 0 : item);
      for(let i = 0; i<last.length; i++){
        if(last.includes(addedArr - last[i]) || addedArr - last[i] === 0){
          return true;
        }
      }//ends else statement
  }//ends final else
  return false;
}

module.exports = subsetSum;
