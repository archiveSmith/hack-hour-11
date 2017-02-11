/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 *///

function pow(base, powers) {
  let result = 1;
  if (power === 0) {
      return result;
  }
  power--;
  return pow(base, power) * base
}

module.exports = pow;
