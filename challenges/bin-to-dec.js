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
  let binArr = binary.split('').reverse();
  let total=0;
  let curVal = 1;
  while(binArr.length){
   total += binArr.shift() * curVal;
   curVal = curVal*2;
  }
  return total;
}

module.exports = binToDec;
