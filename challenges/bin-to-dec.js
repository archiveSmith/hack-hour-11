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
  let array = binary.split('').reverse().map((val) => Number(val));
  for (let i = 0; i < array.length; i += 1) {
    if(array[i] === 0) {
      total += (0 * Math.pow(2, i));
    }

    else if (array[i] === 1) {
      total += (1  * Math.pow(2, i));
    }
  }

  return total;
}

module.exports = binToDec;
