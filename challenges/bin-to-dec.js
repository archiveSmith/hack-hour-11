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
    console.log(result);

}

// function decToBin(dec) {
//     let i=0;
//     let num=0;
//     result = [];
    
//     while(dec >= num) {
//         console.log('checking if ' + dec + ' is greater than ' + num);
//         num = Math.pow(2, i);
//         i++;

//         if (num > dec) {
//             console.log('in termination case');
//             i--;
//             i--;
//             result.push(1);
//             num = Math.pow(2, i);
//             console.log('i is' + i + 'num is ' + num)
//             dec -= num;
//             for (let j=i; j>=0; j--) {
//                 num = Math.pow(2, j);
//                 console.log('in for loop. j is ' + j + ', i is ' + i + ' num is ' + num + ' dec is ' + dec)
//                 if (dec < num) {
//                     result.push(0);
//                 } else {
//                     result.push(1);
//                     dec -= num;
//                 }
//             }
//         }

//         console.log(result);


//         console.log('in while loop, num is ' + num + ' and i is ' + i);
//     }
    
// }

binToDec(10);
module.exports = binToDec;
