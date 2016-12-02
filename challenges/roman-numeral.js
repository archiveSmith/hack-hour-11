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
  let numeral = '';
  let value = n;
  while (value > 0) {
    console.log(value);
    if (value >= 1000) {
      numeral += 'M';
      value -= 1000;
    } else if (value >= 500) {
      numeral += 'D';
      value -= 500;
    } else if (value >= 100) {
      numeral += 'C';
      value -= 100;
    } else if (value >= 50) {
      numeral += 'L';
      value -= 50;
    } else if (value >= 10) {
      numeral += 'X';
      value -= 10;
    } else if (value >= 5) {
      numeral += 'V';
      value -= 5;
    } else {
      numeral += 'I';
      value -= 1;
    } 
    
    let check = numeral.slice(numeral.length - 4)
    // if ()
  }
  return numeral;
}

module.exports = romanNumeral;
