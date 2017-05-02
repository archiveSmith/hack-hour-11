/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (!arr || !n || arr.length < 1) {
        return false;
    }

    let obj = {};
    for (let i=0; i<arr.length; i++) {
        if (obj[arr[i]]) {
            return true;
        } else obj[n - arr[i]] = true;
    }
    return false;
}

// console.log(twoSum([2,4,3,8], 5))

module.exports = twoSum;
