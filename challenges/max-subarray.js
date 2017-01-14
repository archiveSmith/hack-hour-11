/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    if (!arr) {
        return false;
    }
    
    maxSoFar = arr[0];
    current = arr[0];

    for (let i=1; i<arr.length; i++) {
        current = current + arr[i];
        
        if (current > maxSoFar) {
            maxSoFar = current;
        }

        if (current < 0) {
            current = 0;
        }
    }
    return maxSoFar;
}

console.log(maxSubarray([-15,-20,-35,-10,-45]));

module.exports = maxSubarray;
