// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
function matchWord(str) {
	str = str.replace(/[^a-z]/gi,' ');
	str = str.trim();
	let rev = str.split('').reverse().join('');
	let arr = [];
	for(let i =0; i < str.length; i++){
	  if(str[i] !== " "){
	    let word = "";
    	while(str[i] !== " " && i < str.length){
    	  word += str[i];
    	  i++;
    	}
    	arr.push(word);
	  }
	}
	
	if(arr.length % 2 === 1){
	  return false;
	} else {
	  let key = [];
	  for(let j = 0; j<arr.length; j++){
	    if(key.indexOf(arr[j]) === -1 && key.indexOf(arr[j].split('').reverse().join('')) === -1){
	      key.push(arr[j]);
	    } else if(key.indexOf(arr[j].split('').reverse().join('')) === key.length-1){
	      key.pop();
	      
	    }
	  }
	 
	  if(key.length !== 0){
	  return false;
	}
	}

  return true;
}




module.exports = matchWord;
