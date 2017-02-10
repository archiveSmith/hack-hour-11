/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

const swap = function (array, pos1, pos2) {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};


function eachPermutation(arr, callback, length) {
  let j;

  if(!length) {
    length = arr.length;
  }
  else {
    length = length;
  }

  if(length === 1) {
    callback(arr);
  }
  else {
    for(let i = 1; i <= length; i += 1) {
      eachPermutation(arr, callback, length - 1);
        if( length % 2) {
          j = 1;
        }
        else {
          j = i;
        }
        swap(arr, j - 1, length - 1);
      }
    }
  }

// 
// console.log(eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm);
// }))



module.exports = eachPermutation;
