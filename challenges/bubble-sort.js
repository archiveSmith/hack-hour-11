// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    if (!array) {
        return false;
    }
    
    let temp;
    let swaps = true;

    while (swaps) {
        swaps = false;
        for (let i=0; i<array.length; i++) {
            if (array[i+1]) {
                if (array[i] > array[i+1]) {
                    temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    swaps = true; 
                }
            }
        }
    }
    return array;

}

bubbleSort([1,5,3,4,6,2])

module.exports = bubbleSort;
