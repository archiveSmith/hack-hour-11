/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
  let answer = 1;

  function powerCalc(base, power) {
      while(power > 0) {
        power--;
        answer = answer * base;
        return powerCalc(base, power);
      }

       return answer;
  }

  if(power === 0) {
    return 1;
  }

  else if (base === 0) {
    return 0;
  }

  else if(!base || !power || power < 0) {
    return undefined;
  }

  else {
    return powerCalc(base, power);
  }
 }

module.exports = pow;
