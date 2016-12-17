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
	let answer = '';
	num = num.toString();
	let numkey = {
		'0': '',
		'1': 'One',
		'2': 'Two',
		'3': 'Three',
		'4': 'Four',
		'5': 'Five',
		'6': 'Six',
		'7': 'Seven',
		'8': 'Eight',
		'9': 'Nine'
	};
	let tensKey = {
		'0': '',
		'1': {
			'0': 'Ten',
			'1': 'Eleven',
			'2': 'Twelve',
			'3': 'Thirteen',
			'4': 'Forteen',
			'5': 'Fifteen',
			'6': 'Sixteen',
			'7': 'Seventeen',
			'8': 'Eighteen',
			'9': 'Nineteen'
		},
		'2': 'Twenty',
		'3': 'Thirty',
		'4': 'Forty',
		'5': 'Fifty',
		'6': 'Sixty',
		'7': 'Seventy',
		'8': 'Eighty',
		'9': 'Ninety'
	};

	let decimalKey = {
	  '0': '',
	  '1': '',
		'3': 'Hundred',
		'4': 'Thousand',
		'6': 'Hundred',
		'7': 'Million',
		'9': 'Billion',
		'12': 'Trillion',
		'15': 'Quadrillion'
	};
	for(let i = 0; i < num.length; i++) {
		let rest = num.length - i;
		if(rest === 5){
		  if(num.length > 6){
		    
		  }else {
  		  if(num[i] === '1'){
  		    answer += tensKey[1][num[i+1]];
  		    answer += decimalKey[4];
  		    i++;
  		  } else {
  		    
  		  answer += tensKey[num[i]];
  		  answer += numkey[num[i+1]];
  		  answer += decimalKey[4];
  		  i++;
  		  }
		  }
		}else {
  		if(rest === 2){
  		  if(num[i] === '1'){
  		    answer += tensKey[1][num[i+1]];
  		    return answer;
  		  }else {
  		  	answer += tensKey[num[i]];
  		  }
  		} else if(num[i] === '0'){
  		  answer = answer;
  		  
  		} else {
  
  		answer += numkey[num[i]];
  		answer+= decimalKey[rest];
  		}
		}




	}

return answer;

}




}





module.exports = numToWords;
