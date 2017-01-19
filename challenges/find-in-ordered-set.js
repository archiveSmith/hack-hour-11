/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if (!arr) {
        return false;
    }
    if (arr.length === 1) {
        return arr[0] === target;
    }
    
    let found = false;
    let begin = 0;
    let end = arr.length;

    while (!found) {
        // console.log('coming in')
        if (arr[Math.floor((end+begin)/2)] === target) {
            // console.log('found it')
            found = true; 
            return true;
        } else {
            if (arr[Math.floor((end+begin)/2)] > target) {
                // console.log(arr[Math.floor((end+begin)/2)] + ' bigger');
                end = Math.floor((end+begin)/2);
                // console.log('begin is ' + begin)
                // console.log('end is ' + end)
            }   
            else if (arr[Math.floor((end+begin)/2)] < target) {
                // console.log(arr[Math.floor((end+begin)/2)] + ' smaller');
                begin = Math.floor((end+begin)/2)
                // console.log('begin is ' + begin)
                // console.log('end is ' + end)
            } else {
                // console.log('got here')
                return false;
            }
        } if (Math.abs(begin - end) === 1) {
                // console.log('last try')
                return arr[begin]+1 === target || arr[begin] === target;
            }

    }
}

// console.log(findInOrderedSet([1,2,3,4,5,6,8,9], 1))

module.exports = findInOrderedSet;
