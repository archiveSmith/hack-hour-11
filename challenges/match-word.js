// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
 /*Or they close a "case" with "esac", i.e. the same keyword backwards. 
 for this problem we'll check that all words in a string are "closed". 
 	Write a function that takes a string and returns true if every word is closed by 
 its backwards counterpart. Words must be separated by space or punctuation.
 */

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

	//remove all non chars
	let newStr = str.replace(/[^a-z0-9]+/gi, " ");
	newStr = newStr.split(" ");
	const newArr = [];
	console.log(newStr)


	for (let i = newStr.length-1; i >= 0; i--){
		newArr.push(newStr[i])

		console.log(newStr[i])

		if (newArr.length > 1){
			console.log(newArr)

			if (newArr[newArr.length-1] === newArr[newArr.length-2].split("").reverse().join("")){
				newArr.pop();
				newArr.pop();
			}
		}
	

}

console.log(newArr)

	if (newArr.length){
		return false
	}
	else {
		return true
	}
	
	//loop through from the end
	//push the chunks to a new list 
	//if last two items of list match palidromes,
	//remove both of them 



}

console.log(matchWord('__END_DNE-----'))


//97-122 is charcard 
//console.log(num.charCodeAt(1))

module.exports = matchWord;
