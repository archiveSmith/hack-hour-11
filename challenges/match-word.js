// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  str = str.toLowerCase() + ' ';
  let arr = [];
  let tempStr = '';
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      tempStr += str[i];
    } else {
      if (tempStr !== '') {
        arr.push(tempStr)
        tempStr = '';
      }
    }
  }
  console.log(arr)
  for (let j = 0; j < arr.length; j++) {
    if (!obj[arr[j]]) {
      obj[arr[j].split('').reverse().join('')] = 1
    } else {
      delete obj[arr[j]]
    }
    console.log(obj)
  }
  return Object.keys(obj).length === 0

}

module.exports = matchWord;