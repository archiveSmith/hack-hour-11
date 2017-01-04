/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
 
  let counter = 0;
  let divisor;
  
  while (counter <= a && counter <= b){
    
    if (a % counter === 0 && b % counter === 0){
    
      divisor = counter;
    }
    counter ++
    
  }
  
  return divisor;
	

}

module.exports = gcd;