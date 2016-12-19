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

function numToWords(n) {
  var strinumg = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';


     if( parseInt( string ) === 0 ) {
         return 'zero';
     }


     units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];


     tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


     scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];


     start = string.length;
     chunks = [];
     while( start > 0 ) {
         end = start;
         chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
     }


     chunksLen = chunks.length;
     if( chunksLen > scales.length ) {
         return '';
     }


     words = [];
     for( i = 0; i < chunksLen; i++ ) {

         chunk = parseInt( chunks[i] );

         if( chunk ) {


             ints = chunks[i].split( '' ).reverse().map( parseFloat );


             if( ints[1] === 1 ) {
                 ints[0] += 10;
             }

             if( ( word = scales[i] ) ) {
                 words.push( word );
             }


             if( ( word = units[ ints[0] ] ) ) {
                 words.push( word );
             }


             if( ( word = tens[ ints[1] ] ) ) {
                 words.push( word );
             }


             if( ints[0] || ints[1] ) {


                 if( ints[2] || ! i && chunksLen ) {
                     words.push();
                 }

             }


             if( ( word = units[ ints[2] ] ) ) {
                 words.push( word + ' hundred' );
             }

         }

     }

     return words.reverse().join( ' ' );
}

module.exports = numToWords;
