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
  getPerms(arr).forEach(perm => callback(perm));

  function getPerms(arr, len = arr.length) {
    const result = [];
    function perm(items, cur = []) {
      if (cur.length === len) return result.push(cur);
      let item;
      for (let i = 0; i < items.length; i += 1) {
        item = items.splice(i, 1)[0];
        perm(items.slice(), cur.concat(item));
        items.splice(i, 0, item);
      }
    }
    perm(arr);
    return result;
  }
}

module.exports = eachPermutation;