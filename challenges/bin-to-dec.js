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
  let num = binary.split('');
	while(num[0] === "0"){
		num.splice(0,1);
	}
	let result = 0;
	for(let i = 0; i < num.length; i++){
		if(num[i] === "1"){
		result += Math.pow(2,(num.length-1-i));
		}
	}
	return result;

}

function decToBin(decimal){
  let num = Number(decimal);
	let pow2 = 0;
	while((Math.pow(2,pow2)) < num){
		pow2++;
	}
	let result = "";
	pow2 = pow2-1;
	console.log(pow2);
	while(pow2 >= 0){
		if(Math.pow(2,pow2) <= num){
			result += '1';
			num = num - Math.pow(2,pow2);
			pow2--;
		} else {
			result += '0';
			pow2--;
		}
	}
	while(result.length % 8 !== 0){
	  result = '0' + result;
	}
	return result;
 
}



module.exports = binToDec;
