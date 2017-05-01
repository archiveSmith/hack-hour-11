/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result) {
  
  if (power === 0) {
      return base;
  }
  
    result = result * base
    power--;
  
  pow(base, power, results)
  
}

module.exports = pow;
