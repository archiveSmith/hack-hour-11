"use strict";
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
  let names =["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety", };
  let levels = {2: "hundred", };
  let zeros = 0;
  let chars = '';
  let str = "";

  if(num < 20) return names[num];

  do{
    chars = num.toString();
    if((chars.length - 1) > 1){
      str += names[parseInt(chars[0])] + levels[chars.length - 1];
    }else if( (chars.length - 1) === 1){
      str += tens[parseInt(chars[0])];
    }else if( (chars.length - 1) === 0){
      str += names[parseInt(chars[0])];
    }

    str = str.slice(1);
  }while(str.length > 0);

}
console.log(numToWords(234));

module.exports = numToWords;
