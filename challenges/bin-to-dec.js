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

	let newBin = binary.split("");

	let newestBin = newBin.map(function(val){
		return parseInt(val)
	});

	
	let counter = 0;

	while(newestBin.length > 0){

	if (newestBin[newestBin.length-1] === 0){
		counter++;
		newestBin.pop();
	}

	else if(newestBin[newestBin.length-1] === 1){
		counter++;
		newestBin[newestBin.length-1] = newestBin[newestBin.length-1]-1;

	}
}
	return counter;



}

console.log(binToDec("101"))

//module.exports = binToDec;
