/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
   let count = 0;
   let result = 1;
   function exponentPlus() {
     if (count < power) {
       result = result * base;
       count ++;
       exponentPlus();
     }
   }
   function exponentMinus() {
     if (count > power) {
       result = result / base;
       count --;
       exponentMinus();
     }
   }
   exponentPlus();
   exponentMinus();
   return result;
 }

module.exports = pow;
