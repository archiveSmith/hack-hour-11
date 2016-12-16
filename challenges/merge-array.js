/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
    var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 * pop each one at a time and sort those. 
 * do a while loop while there is still a length comparing their first value 
 */

function mergeArrays(arr1, arr2) {
   const newArr = [];
    let pop1;
    let pop2;
    while (arr1.length && arr2.length){
       
        pop1 = arr1[0];
        pop2 = arr2[0];
        
        if (pop1 > pop2){
        
            newArr.push(pop2);
            newArr.push(pop1)

        }
        else{
            
            newArr.push(pop1)
            newArr.push(pop2);

        }
        arr1.shift();
        arr2.shift();   
    }

    if (arr1){
        arr1.forEach(function(val){
            newArr.push(val)
        })

    }
     if (arr2){
        arr2.forEach(function(val){
            newArr.push(val)
        })  
    }

return newArr;

}

 var my_array = [3,4,6,10,11,15,21];
 var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array,another_array))
//module.exports = mergeArrays(;
