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

function eachPermutation(arr, callback) {
  if (!arr || !callback) {
    return false;
  }
  if (arr.length === 1) {
    return callback(arr[0]);
  }

  let total = [];
  
  permute(arr, []);

  for (let i=0; i<total.length; i++) {
    callback(total[i]);
  }
 
  function permute(arr, newSlice, first) {

    if (arr.length === 0) {
      total.push(newSlice)
    }
    for (let i=0; i<arr.length; i++) {
      // console.log('i is ' + i)
      let com = (arr.slice(0,i).concat(arr.slice(i+1)));
      permute(com, newSlice.concat([arr[i]]), arr[i]);
    }
    return total;
  }
}

// eachPermutation([1,2,3,4], function(item){
//   console.log(item, 'i did it')
// });


module.exports = eachPermutation;