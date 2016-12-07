// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  var wordCloses = {};
  var wordArr = [];
  console.log("start: ", str);
  
  //make all letters uppercase for the purpose of matching later
  str = str.toUpperCase();
  console.log("upper: ", str);
  
  //replace all non alpha chars with a space
  str = str.replace(/[^0-9A-Z]/g, " ");
  console.log("alpha only: ", str);
  
  //convert to an array of words
  str = str.split(" ");
  console.log("to array: ", str);
  //now loop through string and push new word/closes to wordCloses object for checking
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "") {
      wordArr.push(str[i]);
    }
  }
  
  //now we have a clean word arr with only potential words and there respective closing (reversed) words
  console.log("word arr: ", wordArr);
  
  //firstly, we can check to make sure there are an even number of elements. If there aren't, we know that we will have an unclosed tag
  if (wordArr.length % 2 !== 0) {
    console.log("Odd number of words, missing close");
    return false;
  }
  //now loop through the array for open/closing matches
  let innerCloseFound = true;
  while (innerCloseFound) {
    innerCloseFound = false;
    for (let i = 0; i < wordArr.length - 1; i++) {
      //first see if we have to check for a close
      
      //check for same length
      if (wordArr[i].length === wordArr[i + 1].length) {
        //see if the last character of the current word is equal to the first character of the next word
        console.log("Check rev: ", wordArr[i], wordArr[i + 1])
        if (wordArr[i] === wordArr[i + 1].split("").reverse().join("")) {
          wordArr.splice(i, 2);
          innerCloseFound = true;
        }
      }
      
      console.log("word Arr now: ", wordArr, wordArr.length); 
    }
  }
  
  //if we don't have any elements left in the array, all words have been closed -> return true. Otherwise return false
  if (!wordArr.length) {
    return true;
  } else {
    return false;
  }
}


module.exports = matchWord;
