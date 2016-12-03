/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	let answer = "";
	while(n >= 1000){
		answer += "M";
		n = n-1000;
	}
	while(n >= 500){
		answer += "D";
		n = n-500;
	}
	while(n >= 100){
		answer += "C";
		n = n-100;
	}
	while(n >= 50){
		answer += "L";
		n = n-50;
	}
	while(n >= 10){
		answer += "X";
		n = n-10;
	}while(n >= 5){
		answer += "V";
		n = n-5;
	}
	while(n >= 1){
		answer += "I";
		n = n-1;
	}
	answer = answer.replace("DCCCC", "CM");
	answer = answer.replace("CCCC", "CD");
	answer = answer.replace("LXXXX", "XC");
	answer = answer.replace("XXXX", "XL");
	answer = answer.replace("VIIII", "IX");
	answer = answer.replace("IIII","IV");

	
	return answer;

}
module.exports = romanNumeral;
