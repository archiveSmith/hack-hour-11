"use strict";
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
  let total = 0;
  for(let i = binary.length - 1, multiple = 1; i >= 0; i--, multiple *= 2){
    total += binary[i] * multiple;
  }
  return total;
}

// function binToDec(binary, multiple = 1, i = binary.length - 1){
//   return i >= 0 ?  (binary[i] * multiple) + binToDec(binary, multiple * 2, --i) : 0;
// }

module.exports = binToDec;
