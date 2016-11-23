/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // if power is negative
  if (power < 0) {
    // base case
    if (power === 0) return 1;
    // recursive call to reach base case
    // main difference of a negative base is to invert the number;
    return (1 / base) * (pow(base, power + 1));
  } 
  // if power is positive
  else {
    // base case
    if (power === 0) return 1;
    // recursive call to reach base case
    return base * pow(base, power - 1);
  }
}

module.exports = pow;
