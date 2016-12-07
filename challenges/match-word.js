// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
strClean = str.replace(/\W|_/g, " ")
strArr = strClean.trim().split(" ");
stack = [];

for (var i=0; i<strArr.length; i++) {
  if (strArr[i].length>0){
    if (stack[length-1] === strArr[i].split("").reverse().join("")){
      strArr.pop()
    } else {
    stack.push(strArr[i]);
    }
  }
}
if (stack.length === 0){
return true;
}
return false
}
module.exports = matchWord;
