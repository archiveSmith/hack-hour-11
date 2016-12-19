// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const original = num;
  const hundreds = {
    1000000000000: 'Trillion',
    1000000000: 'Billion',
    1000000: 'Million',
    1000: 'Thousand',
    100: 'Hundred',
    90: 'Ninety',
    80: 'Eighty',
    70: 'Seventy',
    60: 'Sixty',
    50: 'Fifty',
    40: 'Forty',
    30: 'Thirty',
    20: 'Twenty',
    19: 'Nineteen',
    18: 'Eighteen',
    17: 'Seventeen',
    16: 'Sixteen',
    15: 'Fifteen',
    14: 'Fourteen',
    13: 'Thirteen',
    12: 'Twelve',
    11: 'Eleven',
    10: 'Ten',
    9: 'Nine',
    8: 'Eight',
    7: 'Seven',
    6: 'Six',
    5: 'Five',
    4: 'Four',
    3: 'Three',
    2: 'Two',
    1: 'One'
  }

  let number = '';
  const bajillion = Object.keys(map);
  bajillion.sort((a, b) => b - a);
  for (let i = 0; i < bajillion.length; i++) {
    while (parseInt(num) >= parseInt(bajillion[i])) {
      number += map[bajillion[i]];
      num -= parseInt(bajillion[i]);
    }
  }

  for (let i = 0; i < bajillion.length; i++) {
    original 
  }

  return number;
}

console.log(numToWords(144));

module.exports = numToWords;
