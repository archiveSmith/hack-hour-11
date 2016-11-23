/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//RECURSION METHOD
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

  else if(!base || !power || base < 0 || power < 0) {
    return undefined;
  }

  else {
    return powerCalc(base, power);
  }
}

//NO RECURSION
 // function pow(base, power) {
 //
 //   if(power === 1) {
 //     return 1;
 //   }
 //
 //   else if(!base || !power || base <= 0 || power < 0) {
 //     return undefined;
 //   }
 //
 //   else {
 //
 //     let answer = 1;
 //     for (let i = power; i > 0; i--) {
 //       answer *= base;
 //     }
 //
 //     return answer;
 //   }
 // }

module.exports = pow;
