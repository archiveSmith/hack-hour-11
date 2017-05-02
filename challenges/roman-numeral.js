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

function concatRomNum(str, letter, i) {
  for (let j = 0; j < i; j += 1) {
    str += letter;
  }

  return str;
}

function romanNumeral(n) {

  let str = '';

  while (n > 0) {
    let iterations;
    if (Math.floor(n / 1000) > 0) {
      iterations = Math.floor(n / 1000);
      n = n % 1000;
      str = concatRomNum(str, 'M', iterations);

    } else if (Math.floor(n / 900) > 0) {
      iterations = Math.floor(n / 900);
      n = n % 900;
      str = concatRomNum(str, 'CM', iterations);

    } else if (Math.floor(n / 500) > 0) {
      iterations = Math.floor(n / 500);
      n = n % 500;
      str = concatRomNum(str, 'D', iterations);

    } else if (Math.floor(n / 400) > 0) {
      iterations = Math.floor(n / 400);
      n = n % 400;
      str = concatRomNum(str, 'CD', iterations);

    } else if (Math.floor(n / 100) > 0) {
      iterations = Math.floor(n / 100);
      n = n % 100;
      str = concatRomNum(str, 'C', iterations);

    } else if (Math.floor(n / 90) > 0) {
      iterations = Math.floor(n / 90);
      n = n % 90;
      str = concatRomNum(str, 'XC', iterations);

    } else if (Math.floor(n / 50) > 0) {
      iterations = Math.floor(n / 50);
      n = n % 50;
      str = concatRomNum(str, 'L', iterations);

    } else if (Math.floor(n / 40) > 0) {
      iterations = Math.floor(n / 40);
      n = n % 40;
      str = concatRomNum(str, 'XL', iterations);

    } else if (Math.floor(n / 10) > 0) {
      iterations = Math.floor(n / 10);
      n = n % 10;
      str = concatRomNum(str, 'X', iterations);

    } else if (Math.floor(n / 9) > 0) {
      iterations = Math.floor(n / 9);
      n = n % 9;
      str = concatRomNum(str, 'IX', iterations);

    } else if (Math.floor(n / 5) > 0) {
      iterations = Math.floor(n / 5);
      n = n % 5;
      str = concatRomNum(str, 'V', iterations);

    } else if (Math.floor(n / 4) > 0) {
      iterations = Math.floor(n / 4);
      n = n % 4;
      str = concatRomNum(str, 'IV', iterations);

    } else {//if (Math.floor(n / 1) > 0) {
      iterations = Math.floor(n / 1);
      n = n % 1;
      str = concatRomNum(str, 'I', iterations);
    // } else {

    // }
    }
  }

  return str;
}

module.exports = romanNumeral;
