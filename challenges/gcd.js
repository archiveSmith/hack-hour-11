/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
let gcd;
let min; 
 a < b ? min = a: min =b; 
for(let i = 1; i <= min; i++){
	if(a%i === 0 && b%i === 0){
		gcd = i;
	}
}
return gcd;

}

module.exports = gcd;