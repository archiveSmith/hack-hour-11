/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  
  const newArr = [];
  
  array.sort((a,b) => {
    return a[0] - b[0];
  });
  
  
  for(let i = 0; i < array.length; i += 1) {
    
    if (array[i + 1]) {
      if (array[i][1] < array[i + 1][0]) {
        newArr.push(array[i])
      } else {
        let newSubArr = [];

        newSubArr.push(array[i][0]);
        newSubArr.push(array[i + 1][1]);

        newArr.push(newSubArr);
        i += 2;
      }
    } else {
      newArr.push(array[i]);
    }
                
  }
  
  return newArr;
  
}

//var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
//console.log(mergeRanges(times)); //[[0, 1], [3, 8], [9, 12]]

// console.log('sorted array:', times.sort((a,b) => {
//     return a[0] - b[0];
//   }));

module.exports = mergeRanges;
