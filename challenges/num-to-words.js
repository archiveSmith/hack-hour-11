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

    const word = [];
    
    function lessTen(n){
        
        if (n === 1){
            return 'One'
        }
        else if (n === 2){
            return "Two"
        }
          else if (n === 3){
            return "Three"
        }
          else if (n === 4){
            return "Four"
        }
          else if (n === 5){
            return "Five"
        }
          else if (n === 6){
            return "Six"
        }
          else if (n === 7){
            return "Seven"
        }
          else if (n === 8){
            return "Eight"
        }
          else if (n === 9){
            return "Nine"
        }

    }

    function lessTwenty(n){
          if (n === 11){
            return 'One'
        }
        else if (n === 12){
            return "Twelve"
        }
          else if (n === 13){
            return "Thirteen"
        }
          else if (n === 14){
            return "Fourteen"
        }
          else if (n === 15){
            return "Fifteen"
        }
          else if (n === 16){
            return "Sixteen"
        }
          else if (n === 17){
            return "Seventeen"
        }
          else if (n === 18){
            return "Eighteen"
        }
          else if (n === 19){
            return "Nineteen"
        }
    }

    function lessHundred(n){
          if (n > 89){
            return 'One'
        }
        else if (n > 89){
            return "Ninety"
        }
          else if (n > 79){
            return "Eighty"
        }
          else if (n > 69){
            return "Seventy"
        }
          else if (n > 59){
            return "Sixty"
        }
          else if (n > 49){
            return "Fifty"
        }
          else if (n > 39){
            return "Forty"
        }
          else if (n > 29){
            return "Thirty"
        }
          else if (n > 19){
            return "Twenty"
        }
    }

   const lessThou = {
       900: "Ninehundred",
       800: "Eighthundred",
       700: "Sevenhundred",
       600: "Sixhundred",
       500: "Fivehundred",
       400: "Fourhundred",
       300: "Threehundred",
       200: "Twohundred",
       100:"Onehundred"
   }

const less = {
       900: "Ninehundred",
       800: "Eighthundred",
       700: "Sevenhundred",
       600: "Sixhundred",
       500: "Fivehundred",
       400: "Fourhundred",
       300: "Threehundred",
       200: "Twohundred",
       100:"Onehundred"
   }

if (num < 1000 && num > 99){
    //match it with the number than lessThous
    //object then push it to

    let stringNum = num.toString();
    let newStr = stringNum.slice(0,1) + '00';
    let newNum = parseInt(newStr);
    word.push(lessThou[newNum]);

    let lessHun = stringNum.slice(1);
    pushHundred(lessHun)

    
}

function pushHundred(num){
    if (num > 19 && num < 100){
        word.push(lessHundred(num));
        let stringDigit = num.toString()[1];
        let numDigit = parseInt(stringDigit);
        word.push(lessTen(numDigit));
        }
    }

    return word.join('');


function lessMillion(num){

       const word = [];
    
    function lessTen(n){
        
        if (n === 1){
            return 'One'
        }
        else if (n === 2){
            return "Two"
        }
          else if (n === 3){
            return "Three"
        }
          else if (n === 4){
            return "Four"
        }
          else if (n === 5){
            return "Five"
        }
          else if (n === 6){
            return "Six"
        }
          else if (n === 7){
            return "Seven"
        }
          else if (n === 8){
            return "Eight"
        }
          else if (n === 9){
            return "Nine"
        }

    }

    function lessTwenty(n){
          if (n === 11){
            return 'One'
        }
        else if (n === 12){
            return "Twelve"
        }
          else if (n === 13){
            return "Thirteen"
        }
          else if (n === 14){
            return "Fourteen"
        }
          else if (n === 15){
            return "Fifteen"
        }
          else if (n === 16){
            return "Sixteen"
        }
          else if (n === 17){
            return "Seventeen"
        }
          else if (n === 18){
            return "Eighteen"
        }
          else if (n === 19){
            return "Nineteen"
        }
    }

    function lessHundred(n){
          if (n > 89){
            return 'One'
        }
        else if (n > 89){
            return "Ninety"
        }
          else if (n > 79){
            return "Eighty"
        }
          else if (n > 69){
            return "Seventy"
        }
          else if (n > 59){
            return "Sixty"
        }
          else if (n > 49){
            return "Fifty"
        }
          else if (n > 39){
            return "Forty"
        }
          else if (n > 29){
            return "Thirty"
        }
          else if (n > 19){
            return "Twenty"
        }
    }

   const lessThou = {
       900: "Ninehundred",
       800: "Eighthundred",
       700: "Sevenhundred",
       600: "Sixhundred",
       500: "Fivehundred",
       400: "Fourhundred",
       300: "Threehundred",
       200: "Twohundred",
       100:"Onehundred"
   }

const less = {
       900: "Ninehundred",
       800: "Eighthundred",
       700: "Sevenhundred",
       600: "Sixhundred",
       500: "Fivehundred",
       400: "Fourhundred",
       300: "Threehundred",
       200: "Twohundred",
       100:"Onehundred"
   }

if (num < 1000 && num > 99){
    //match it with the number than lessThous
    //object then push it to

    let stringNum = num.toString();
    let newStr = stringNum.slice(0,1) + '00';
    let newNum = parseInt(newStr);
    word.push(lessThou[newNum]);

    let lessHun = stringNum.slice(1);
    pushHundred(lessHun)

    
}

function pushHundred(num){
    if (num > 19 && num < 100){
        word.push(lessHundred(num));
        let stringDigit = num.toString()[1];
        let numDigit = parseInt(stringDigit);
        word.push(lessTen(numDigit));
        }
    }

word.push('Thousand')
    return word.join('');

    }
}

console.log(numToWords(555))

//module.exports = numToWords;
