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
    if (num < 0) {
        return false;
    }
    if (num === 0) {
        return 'Zero';
    }

    let result = '';
    let myNum = num;
    let groups = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];
    let tenToHundred = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', {'1': 'Eleven', '2': 'Twelve', '3': 'Thirteen', '4': 'Fourteen', '5': 'Fifteen', 
                                                                                                            '6': 'Sixteen', '7': 'Seventeen', '8': 'Eighteen', '9': 'Nineteen'}]
    let oneToNine = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    let digitLength = num.toString().length;
    let firstSet = digitLength % 3;
    let stringNum = num.toString();
    let numSets;
    let loc;
    
    if (firstSet === 1) {
        result += oneToNine[stringNum[0]];
        numSets = Math.floor((digitLength - 1)/3);
        loc = 1;
        result += groups[numSets];
    }
    if (firstSet === 2) {
        if (num.toString()[0] === '1' && stringNum[1] !== '0') {
            result += tenToHundred[10][stringNum[1]];
        } else {
            result += tenToHundred[stringNum[0]];
            result += oneToNine[stringNum[1]];
        }
        numSets = Math.floor((digitLength - 2)/3);
        loc = 2;
        result += groups[numSets];
    }
    if (firstSet === 0) {
        evalTriple(stringNum[0].concat(stringNum[1].concat(stringNum[2])));
        numSets = Math.floor((digitLength - 3)/3);
        loc = 3;
        result += groups[numSets];
    }

    for (let i=0; i<numSets; i++) {
        if(!(stringNum[loc] === '0' && stringNum[loc+1] === '0' && stringNum[loc+2] === '0')){
            evalTriple(stringNum[loc].concat(stringNum[loc+1].concat(stringNum[loc+2])));
            result += groups[numSets-i-1];
        } 
        
        loc = loc + 3;
    }

    function evalTriple(triple) {
        nums = triple.toString();
        result += oneToNine[nums[0]];
        if (oneToNine[nums[0]] !== '0') {
            result += 'Hundred';
        }
        if (nums[1] === '1' && nums[2] !== '0') {
            result += tenToHundred[10][nums[2]]
        } else {
            result += tenToHundred[nums[1]];
            result += oneToNine[nums[2]];
        }
    }
    return result;
   // console.log(myNum);
}

console.log(numToWords(134567878080909));

module.exports = numToWords;
