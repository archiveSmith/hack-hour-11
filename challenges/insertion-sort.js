// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    if (!array) {
        return false;
    }
    
    let result = [];

    for (let i=0; i<array.length; i++) {
        // console.log('looping ' + array[i])
        
        if (result.length < 1) {
            result.push(array[0]);
            i++;
            // console.log('looping ' + array[i])
        }

        for (let j=0; j<result.length; j++) {
            if (array[i] <= result[j]) {
                // console.log('result ' + result[j])
                // console.log('its less than ' + result[j]);
                result.splice(j, 0, array[i]);
                // console.log(result)
                break;
            }
            
            else if (j === result.length-1) {
                // console.log('got to the end, pushing now')
                result.push(array[i]);
                // console.log(result)
                break;
            } 
        }
    }
    return result;    
}
        
    
    


insertionSort([6,3,8,10,4,7,9]);

module.exports = insertionSort;