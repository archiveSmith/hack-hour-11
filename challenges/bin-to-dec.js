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
  let dec = 0;
  if (/^[01]+$/.test(binary)) {
    //start countining columns based on position of first non 0 position
    binary = binary.substr(binary.indexOf("1")).split("").reverse();
    for (let col = 0; col < binary.length; col++) {
      if (binary[col] === "1") {
        dec += Math.pow(2, col);
      }
    }
  }
  
  return dec;
}

module.exports = binToDec;
