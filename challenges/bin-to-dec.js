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
      output += 2 ** i;
    } 
  }
  return output;
}

function decToBin(n) {
  let max = 0;
  let power = 0;
  while (max <= n) {
    power += 1;
    max = Math.pow(2, power);
  }
  let target = n;
  let output = '';
  let limit = power;
  for (let i = 0; i < limit; i++) {
    if (target >= Math.pow(2, power - 1)) {
      output += '1';
      target -= Math.pow(2, power - 1);
      power -= 1;
    } else {
      output += '0';
      power -= 1;
    }
  }
  return output;
}

module.exports = binToDec;

