/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


function gcd(a, b) {
	let aDiv=[];
	let bDiv=[];
	let ans = 1;
	for(let i=0;i<=a;i++){
		if(a%i===0){
			aDiv.push(i)
		}
	}
	for(let i=0;i<=b;i++){
		if(b%i===0){
			bDiv.push(i)
		}	
	}
	for(let i=0; i<aDiv.length; i++){
		if(bDiv.includes(aDiv[i])){
			ans=aDiv[i];
		}
	}
	return ans
}


module.exports = gcd;