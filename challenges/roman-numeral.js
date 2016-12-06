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
//if under 10, then do brute force if statement
//then do all options for 10,20,30,40,50
//then do options for 100,200,300, 
//then do 1000s..

let newNum = [];

function lessThanTen(n){

	if (n === 1){
		newNum.push("I")
	}
	else if (n === 2){
		newNum.push("II")
	}
	else if (n === 3){
		newNum.push("III")
	}
	else if (n === 4){
		newNum.push("IV")
	}
	else if (n === 5){
		newNum.push("V")
	}
	else if (n === 6){
		newNum.push("VI")
	}
	else if (n === 7){
		newNum.push("VII")
	}
	else if (n === 8){
		newNum.push("VIII")
	}
	else if (n === 9){
		newNum.push("IX")
	}

}

function lessThanHundred(n){
	
	if (n > 89){
		newNum.push("XC")
	}
	else if (n > 79) {
		newNum.push("LXXX")
	}
	else if (n > 69) {
		newNum.push("LXX")
	}
	else if (n > 59) {
		newNum.push("LX")
	}
	else if (n > 49) {
		newNum.push("L")
	}
	else if (n > 39) {
		newNum.push("XL")
	}
	else if (n > 29) {
		newNum.push("XXX")
	}
	else if (n > 19) {
		newNum.push("XX")
	}
	else if (n > 9) {
		newNum.push("X")
	}
}

function lessThousand{
	if (n > 899){
		newNum.push("CM")
	}
	else if (n > 799) {
		newNum.push("DCCC")
	}
	else if (n > 699) {
		newNum.push("DCC")
	}
	else if (n > 599) {
		newNum.push("DC")
	}
	else if (n > 499) {
		newNum.push("D")
	}
	else if (n > 399) {
		newNum.push("CD")
	}
	else if (n > 299) {
		newNum.push("CCC")
	}
	else if (n > 199) {
		newNum.push("CC")
	}
	else if (n > 99) {
		newNum.push("C")
	}

}

if (n < 10){
	lessThanTen(n)
}

if (n > 10 && n < 100){
	lessThanHundred(n);
	let numString = n.toString();
	lessThanTen( parseInt(numString[1]))
}

if (n > 100 && n < 1000){
	lessThousand(n);
	let numString = n.toString;
	lessThanHundred(parseInt(numString.slice(1)))
	
}


return newNum.join("");

}

console.log(romanNumeral(98))

//module.exports = romanNumeral;
