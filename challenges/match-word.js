// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

	//lower case everything
	//push them all to array
	//if just two, see if they match
	//if odd number, we know it will be false
	//if 4 of them, then outsides have to match, and insides have to match
	//if 6, then matches need to be (0,5), (1,4), (2,3)

	//what is the pattern here?
	//we can pop and push and see if the ends still match...
	//yes, that will work!!!!
	//okay, code it now

	let newStr = str.toLowerCase();

	let newArr = [];
	let words = {};

//need to push words into array
//find indexes where words are and then push a slice the str into the array..
//get indexes where you know words are.

//would it be easier to just remove all punctuation
// and white space??? and convert it to an array? split by comma

	for (let i = 0; i < newStr.length; i++){
		

		if (newStr.charCodeAt(i) > 96 && newStr.charCodeAt(i) < 123 ) {
			newArr.push(newStr[i]);

		}	
		else{
			newArr.push(',')
		}



	}



	//if I can push all of the words into a new array, then compare ends

	return typeof newArr.join("")

}

console.log(matchWord('for__if__rof__fi'))


//97-122 is charcard 
//console.log(num.charCodeAt(1))

//module.exports = matchWord;
