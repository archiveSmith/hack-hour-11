// Write a function that takes a number as an argument and returns its english word representation as a string. 
// Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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
  // let tbl = {
  //   0: 'zero',
  //   1: 'one',
  //   2: 'two,',
  //   3: 'three',
  //   4: 'four',
  //   5: 'five',
  //   6: 'six',
  //   7: 'seven',
  //   8: 'eight',
  //   9: 'nine',
  //   10: 'ten',
  //   11: 'eleven',
  //   12: 'twelve',
  //   13: 'thirteen',
  //   14: 'fourteen',
  //   15: 'fifteen',
  //   16: 'sixteen',
  //   17: 'seventeen',
  //   18: 'eighteen',
  //   19: 'nineteen',
  //   20: 'twenty',
  //   30: 'thirty',
  //   40: 'forty',
  //   50: 'fifty',
  //   60: 'sixty',
  //   70: 'seventy',
  //   80: 'eighty',
  //   90: 'ninety',
  //   100: 'oneHundred',
  //   1000: 'oneThousand',
  //   1000000: 'oneMillion',
  //   1000000000: 'oneBillion',
  //   1000000000000: 'oneTrillion',
  //   1000000000000000: 'oneQuadrillion',
  // };
  
  let decimal = [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000, 1000000000, 1000000000000, 1000000000000000];
 let word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twentry', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'oneHundred','oneThousand', 'oneMillion', 'oneBillion', 'oneTrillion', 'oneQuadrillion'];

  let output = '';
  for (let i = 0; i <= decimal.length; i += 1) {
    while (n % decimal[i] < n) {
      output += word[i];
      n -= decimal[i];
    }
  }
  return output;
}

module.exports = numToWords;







function numToWords(num) {

 let decimal = [0, 1, 3, 2 , 4, 5, 6, 7,8,9 ,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70 ,80 ,90 ,100,1000,1000000,1000000000,1000000000000,1000000000000000]
 let word = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twentry','thirty','forty','fifty','sixty','seventy','eighty','ninety','oneHundred','oneThousand','oneMillion','oneBillion','oneTrillion','oneQuadrillion'];

  let output = '';
  for (let i = 0; i <= decimal.length; i += 1) {
    if (output == num) {
      return output;
      }
    output += word[i];
  }
}

console.log(numToWords(4))