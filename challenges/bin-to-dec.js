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
  let bin = [];
  let dec = binary.split('').map(x => Number(x));
  let len = dec.length;
  let power = 0;
  for (let i = 0; i < dec.length; i++) {
    bin.push(Math.pow(2, power));
    power += 1;
  }
  bin.reverse();
  return bin.map((e, i) => {
    if (dec[i] === 0) return 0;
    return e;
  }).reduce((a, c) => a + c);
}

// console.log('hi', binToDec('10011100'));

module.exports = binToDec;
