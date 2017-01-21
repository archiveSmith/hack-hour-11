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
  if (array === undefined || array === []) return undefined;
  
  array.sort((a, b) => a-b)
   
  while (array[0] === array[1]) {
     array = array.slice(2)
   }
   
  return array[0]
  
}

module.exports = uniqueNumber;
