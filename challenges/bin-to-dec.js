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
  const bin = [];
  const dec = binary.split('').map(x => Number(x));
  let power = 0;
  dec.forEach(e => bin.unshift(Math.pow(2, power++)));
  return bin.map((e, i) => dec[i] === 0 ? 0 : e).reduce((a, c) => a + c);
}

module.exports = binToDec;
