/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */
 
function romanNumeral(n) {
  const numberChars = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }
  const breakPoints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  let rn = "";
  
  if (isNaN(n) || n <= 0) {
    rn = "nulla";
  }
  else {
    for (let i = 0; i < breakPoints.length; i++) {
      if (Math.floor(n/breakPoints[i]) !== 0) {
  
        if (Math.floor(n/breakPoints[i]) > 1) {
          for (let j = 0; j < Math.floor(n/breakPoints[i]); j++) {
            rn = rn + numberChars[breakPoints[i]];
            n = n - breakPoints[i];
          }
          
        }
    
        rn = rn + numberChars[breakPoints[i]];
      }
      n = n % breakPoints[i];
    }
  }
  
  return rn;
}

module.exports = romanNumeral;
