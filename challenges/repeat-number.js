/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// function repeatNumbers(array) {
//   let remember = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (remember.indexOf(array[i]) !== -1) {
//       return array[i];
//     } else {
//     // console.log('ya')
//       remember.push(array[i]);
//     }
//   }
// }


function repeatNumbers(array) {
  let remember = {};
  for (let i = 0; i < array.length; i += 1) {
    if (remember[array[i]]) {
      return array[i];
    } else {
      remember[array[i]] = true;
    }
  }
}

 // console.log(repeatNumbers([1,2,3,4,5,2,7]));

module.exports = repeatNumbers;


