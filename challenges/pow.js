/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   let count = 1;
   let result = 1;
   function exponent() {
     if (count <= power) {
       result = result * base;
       count ++;
       exponent();
     }
   }
   exponent();
   return result;

 }

module.exports = pow;
