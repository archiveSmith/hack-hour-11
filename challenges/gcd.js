/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 function gcd(a, b) {
   let min = Math.min(a, b);
   let max = Math.max(a, b)
   if (min > 0){
   for(let i = min; i > 0; i--) {
     if (a % i === 0 && b % i === 0) {
       return i
     }

   }
   } else {
     for(let i = min; i <= max; i++) {
     if (a % i === 0 && b % i === 0) {
       return i
     }
   }
   }
   return 0;
 }

module.exports = gcd;
