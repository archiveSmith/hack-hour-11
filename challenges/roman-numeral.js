'use strict';
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
let rome = [{1000: "M"}, {900: "CM"}, {500: "D"}, {400: "CD"}, {100: "C"}, {90: "XC"}, {50: "L"}, {40: "XL"}, {10: "X"}, {5: "V"}, {4: "IV"}, {1:"I"}];
function romanNumeral(n, i) {
  if(n === 0 || i === rome.length) return "";
  if( i === undefined) i = 0;
  let key = Object.keys(rome[i])[0];
  let leftover = n - key;

  if(leftover >= 0){
    return rome[i][key] + romanNumeral(leftover, i);
  }else{
    return romanNumeral(n, i+1);
  }
}

module.exports = romanNumeral;
