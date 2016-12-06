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
    let bin = binary.toString();
    let result = 0;
    for (let i=bin.length-1; i>=0; i--) {
        result += Math.pow(2, bin.length-1-i) * parseInt(bin[i]);
    }
    return result;

}

function decToBin(dec) {
    let i=0;
    let num=0;
    result = '';
    
    while(dec >= num) {
        num = Math.pow(2, i);
        i++;

        if (num > dec) {
            i = i-2;
            result += 1;
            num = Math.pow(2, i);
            dec -= num;
            for (let j=i-1; j>=0; j--) {
                num = Math.pow(2, j);
                if (dec < num) {
                    result += 0;
                } else {
                    result += 1;
                    dec -= num;
                }
            }
        }

        
    }
    return result;


}

module.exports = binToDec;
