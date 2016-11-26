/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === -1) return 1 / base;
  if (power === 0) return 1;
  if (power < 0) {
    return (1 / base) * pow(base, power + 1);
  }
  if (power > 0) {
    return base * pow(base, power - 1);
  }
}
module.exports = pow;


/*
for example pow(3,-3)

--
return 1/3 * 1/pow(3,-2) 1/3

return 1/3 *1/pow(3,-1) 1

return 1/3 * 1/pow(3,0)  == 1/3

return 1

*/
