/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if (!Array.isArray(array) || !array.length) return undefined;

// REDUCE
  let buffer = array.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else delete acc[cur];
    return acc;
  }, {})
//// BRUTE FORCE
  // const buffer = {};
  // array.forEach(num => {
  //   if (!buffer[num]) buffer[num] = 1;
  //   else buffer[num] += 1;
  // })
  for (let prop in buffer) {
    return prop;
  }
}

module.exports = uniqueNumber;

console.log(uniqueNumber([1,2,1,3,3]));

