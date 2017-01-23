/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let result = [];
    if (!array || array.length < 3) {
        return false;
    }
    sortedArray = array.sort(function(a,b){return b-a});
    result.push(sortedArray[0]);
    result.push(sortedArray[1]);
    result.push(sortedArray[2]);

    let len = sortedArray.length;
    if (sortedArray[len-1] < 0 && sortedArray[len-2] < 0) {
        if (sortedArray[len-1] * sortedArray[len-2] > result[result.length-1] * result[result.length-2]) {
            result[result.length-1] = sortedArray[len-1];
            result[result.length-2] = sortedArray[len-2];
        }
    }
    return result[0] * result[1] * result[2];

}

//console.log(highestProduct([2,6,5,4,9,7,3,-11,-8]))

function runThrough(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log('this number is even: ' + arr[i] + '!!');
        } else {
            console.log('this number is odd: ' + arr[i] + '!!');
        }
    }
}

runThrough([2,3,8,5,6,4,9]);

module.exports = highestProduct;
