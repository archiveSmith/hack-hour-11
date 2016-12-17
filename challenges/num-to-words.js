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
  const table = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fiften',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteetn',
    '20': 'Twenty',
    '30': 'Thirty',
    '40': 'Forty',
    '50': 'Fifty',
    '60': 'Sixty',
    '70': 'Seventy',
    '80': 'Eighty',
    '90': 'Ninty',
    '100': 'OneHundred',
    '200': 'TwoHundred',
    '300': 'ThreeHundred',
    '400': 'FourHundred',
    '500': 'FiveHundred',
    '600': 'SixHundred',
    '700': 'SevenHundred',
    '800': 'EightHundred',
    '900': 'NineHundred',
    '1000': 'OneThousand'
  };
  const arr = [];
  let str = '';
  let result;
  let multiplier = 1;
  if (num < 21) return table[num];
  else {
    while (num > 0) {
      result = num % 10;
      if (result > 0) {
        arr.unshift(result * multiplier);
      }
      num = Math.floor(num / 10);
      multiplier *= 10;
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    str += table[arr[i]];
  }
  return str;
}

module.exports = numToWords;
