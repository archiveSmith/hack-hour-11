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
  let decSum = 0;
  const len = binary.length;

  binary = binary.split('').reverse();
  
  for (let i = 0; i < len; i += 1) {
    decSum += parseInt(binary[i]) * Math.pow(2, i);
  }

  return decSum;
}

function hexConverter(binary) {

  binary = binary.reverse();//binary.split('').reverse();

  if (binary.length < 4) {
    while (binary.length < 4) {
      binary.push('0');
    }
  }

  const len = binary.length;
  let decSum = 0;

  for (let i = 0; i < len; i += 1) {
    decSum += parseInt(binary[i]) * Math.pow(2, i);
  }

  switch(decSum){
    case (10):
      return 'A';
    case (11):
      return 'B';
    case (12):
      return 'C';
    case (13):
      return 'D';
    case (14):
      return 'E';
    case (15):
      return 'F';
    default:
      return String(decSum);
  }
}

function binToHex(binary) {

  let limitCounter = 0;
  let arr = [];
  let subArr = [];

  for (let i = 0; i < binary.length; i += 1) {
    limitCounter += 1;

    if (limitCounter <= 4) {
      subArr.push(binary[i]);
    } else {
      arr.push(subArr);
      limitCounter = 1;
      subArr = [];
      subArr.push(binary[i]);
    }
  }

  let hexString = '';

  for (let j = 0; j < arr.length; j += 1) {
    hexString += hexConverter(arr[j]);
  }

  return hexString;
}

module.exports = binToDec;
