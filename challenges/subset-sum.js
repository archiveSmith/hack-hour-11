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
<<<<<<< HEAD
let resultArr = [];
let resultArr2 = [];
for (var i = 0; i<array.length; i++){
  for (var k =1; k<array.length; k++){
    resultArr.push(array[i]+array[k])
    for(var j=0; j<resultArr.length; j++){
      resultArr2.push(array[i]+ resultArr[j])
    }
      }
    }
if (resultArr.includes(target) || resultArr2.includes(target)){

    return true;
} 
console.log(resultArr)
  console.log(resultArr2)
return false
}


=======

}

>>>>>>> 2d5e6c3e4be4404efad54fee792c1e1a98feee46
module.exports = subsetSum;
