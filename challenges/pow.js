/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
 
  let nextPow;

  if (power < 0) {
    base = 1 / base;
  }
  
  function calculatePow(base, pow) {
    if (pow === 0) {
      return 1;
    } 
    
    if (power < 0) {
      nextPow = pow + 1;
    } else {
      nextPow = pow - 1;
    }
    
    return base * calculatePow(base, nextPow);
  }
  
  return calculatePow(base, power);
}

module.exports = pow;
