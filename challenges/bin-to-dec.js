/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
*   binToDec('0')   -> 0
 *  binToDec('11')  -> 3
 *  binToDec('100') -> 4
 *  binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const nums = binary.split('').reverse();
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) === 1) {
      output += Math.pow(2, i);
    } 
  }
  return output;
}

module.exports = binToDec;

