/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === 0 || b === 0 ) return  1;
  if (a < b){
    let temp;
    temp = a;
    a = b;
    b = temp
  } 
  c = a % b;
  while ( c !== 0){
    a = b;
    b = c;
    c = a % b;
  }
  return b;
}


module.exports = gcd;