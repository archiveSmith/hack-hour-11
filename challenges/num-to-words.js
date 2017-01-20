// Write a function that takes a number as an argument and returns its english word representation as a 
// string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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
  if (num === 0) return 'Zero';
  const lookup = {
    Quintillion: 1000000000000000000,
    Quadrillion: 1000000000000000,
    Trillion: 1000000000000,
    Billion: 1000000000,
    Million: 10000000,
    Thousand: 1000,
    Hundred: 100,
    Ninety: 90,
    Eighty: 80,
    Seventy: 70,
    Sixty: 60,
    Fifty: 50,
    Forty: 40,
    Thirty: 30,
    Twenty: 20,
    Nineteen: 19,
    Eighteen: 18,
    Seventeen: 17,
    Sixteen: 16,
    Fifteen: 15,
    Fourteen: 14,
    Thirteen: 13,
    Twelve: 12,
    Eleven: 11,
    Ten: 10,
    Nine: 9,
    Eight: 8,
    Seven: 7,
    Six: 6,
    Five: 5,
    Four: 4,
    Three: 3,
    Two: 2,
    One: 1,
  }

  function help(num) {
    let output = '';
    let value = num;
    const keys = Object.keys(lookup);
    for (let i = 0; i < keys.length; i++) {
      while (value >= lookup[keys[i]]) {
        const multiple = Math.floor(value / lookup[keys[i]]);
        if (multiple > 1) {
          help(multiple);
        } else {
          output += keys[i];
          value -= lookup[keys[i]];
        }
      }
    }
    return output;
  }

  let output = '';
  let value = num;
  const keys = Object.keys(lookup);
  for (let i = 0; i < keys.length; i++) {
    while (value >= lookup[keys[i]]) {
      const multiple = Math.floor(value / lookup[keys[i]]);
      if (multiple > 1) {
        help(multiple);
      } else {
        output += keys[i];
        value -= lookup[keys[i]];
      }
    }
  }
  return output;
}
module.exports = numToWords;
