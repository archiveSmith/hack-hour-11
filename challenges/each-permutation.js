/*
Write a function that takes two arguments, an array and a callback. 
The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. 
For this problem, assume each permutation must include
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

const getPerms = (itemsArr, len = itemsArr.length) => {
  const result = []; // permutations will be stored here
  // this is our recursive function that will populate the result arr
  function perm(items, cur = []) {
    if (cur.length === len) return result.push(cur); // base condition to end the recursive call
    let item;
    for (let i = 0; i < items.length; i += 1) {
      // get the ith item out of the array
      item = items.splice(i, 1)[0];
      // recurisve call with copy of items array and copy of cur with the item added
      perm(items.slice(), cur.concat(item));
      // place the item back in the array
      items.splice(i, 0, item);
    }
  }
  // use perm to populate result arr with possible permutations
  perm(itemsArr);
  return result;
};

function eachPermutation(arr, callback) {
	let perms = getPerms(arr);
	
	perms.forEach((val) => {
		callback(val)
	})
}

console.log(eachPermutation([1,2,3],function(value){
	console.log(value)
}))


module.exports = eachPermutation;
