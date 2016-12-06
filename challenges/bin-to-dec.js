/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let sum = 0;
  let currVal = 1;
  let binaryArr = binary.split('').reverse();
  while (binaryArr.length) {
    let curr = binaryArr.shift();
    sum += (curr * currVal);
    currVal *= 2;
  }
  return sum;
}


// function decToBin(dec) {
//   let arr;
//   while ( dec > 1){
//     let furthestIndex = Math.floor(dec/2);
//     arr = new Array(furthestIndex).fill('0');
//     arr[furthestIndex] = 1;
//     dec = dec % furthestIndex;
//     console.log(dec);
//   }
//   let result = arr.join('');
//   return result;
// }

module.exports = binToDec;
