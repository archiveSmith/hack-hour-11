// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  // true
// matchWord('__ENDDNE__');  // false       (not separated by a space)
// matchWord('IF()()fi[]');  // true        (should be case-insensitive)
// matchWord('for__if__rof__fi'); // false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  // true

function matchWord(str) {
  if (str === '') return true;
  const lwrStr = str.toLowerCase();
  const reversed = lwrStr.split('').reverse().join('');
  const subStr = {};
  for (let i = 2; i < lwrStr.length; i++) {
    for (let j = 0; j <= lwrStr.length - i; j++) {
      subStr[lwrStr.slice(j, j + i)] = lwrStr.slice(j, j + i).split('').reverse().join('');
    }
  }
  const subStrKeys = Object.keys(subStr);
  for (let i = 0; i < subStrKeys.length; i++) {
    if (lwrStr.includes(subStr[subStrKeys[i]])) {
      const openStrIndx = lwrStr.indexOf(subStrKeys[i]) + subStrKeys[i].length;
      const closingStrIndx = lwrStr.indexOf(subStr[subStrKeys[i]])
      let inside = lwrStr.slice(openStrIndx, closingStrIndx);
    }
  }
  return true;
}

module.exports = matchWord;
