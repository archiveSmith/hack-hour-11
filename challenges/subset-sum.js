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
    if (!array || !target) {
        return false;
    }

    let sortedArr = array.sort(function(a,b){ return a-b; });
    let sum = 0;

    let filteredArr = sortedArr.filter(function(value) { return value <= target; })


    console.log(filteredArr);
    
    for (let i=filteredArr.length-1; i>=0; i--) {
        sum += filteredArr[i];
        console.log('sum is at: ' + sum);
        if (sum === target) {
            return true;
        }
        if (sum > target) {
            sum = 0;
            console.log('sum was greater, now its ' + sum);
            console.log('splicing ' + filteredArr[i+1]);
            filteredArr.splice(i+1);
            console.log(filteredArr);
            i++;
        }
    } 
    return false;
}

//console.log(subsetSum([12,5,2,9,4,2,5,22,15,6], 16));

module.exports = subsetSum;
