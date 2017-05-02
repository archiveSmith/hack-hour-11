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
  const units = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen',
    'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const tens = [
   '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];
  const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];

  let str = num.toString(), start, end, chunks, chunk, ints, word, and, chunkLength, words, i; 

// split the num into 3 digit chunks
  start = str.length;
  chunks = [];

  while (start > 0 ) {
    end = start;
    chunks.push( str.slice( (start = Math.max(0, start - 3) ), end));
  }

// check if we need to scales
  chunkLength = chunks.length;
  if ( chunkLength > scales.length) {stri
    return '';
  }

  words = [];
  for( i = 0; i < chunkLength; i++ ) {
    chunk = parseInt( chunks[i] );
    if(chunk) {
      ints = chunks[i].split( '' ).reverse().map( parseFloat );

      if(ints[1] === 1) {
        ints[0] += 10;
      }

      if( ( word = scales[i] ) ) {
        words.push(word);
      }

      if( ( word = units[ ints[0] ] ) ) {
        words.push(word);
      }

      if( ( word = tens[ ints[1] ] ) ) {
        words.push(word);
      }

      if( ints[0] || ints[1] ) {

        if( ints[2] || ! i && chunkLength ) {
          words.push(and);
        }
      }

      if( ( word = units[ints[2] ] ) ) {
        words.push(word + 'Hundred');
      }
    }
  }
  
  return words.reverse().join( '' );
}

module.exports = numToWords;
