// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    str += ' ';
    result = [];
    newWord = '';

    for (let i=0; i<str.length; i++) {
        if (str[i].match(/[a-zA-Z]/i)) {
            newWord += str[i].toLowerCase();
        
        } else if (newWord || !str[i+1]) { 
            let reversedWord = newWord.split('').reverse().join('');
        
            if (reversedWord === result[result.length-1]){
                result.pop();
            } else {
                if (newWord !== '') {
                    result.push(newWord);
                }
            }
            newWord = '';
        }
    }
    if (result.length > 0) {
        return false;
    } else {
        return true;
    }
}


console.log(matchWord('IF()()fi[]'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('you hi ih uoy you'));
console.log(matchWord('__END_DNE-----'));

module.exports = matchWord;
