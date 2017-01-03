<<<<<<< HEAD
"use strict";
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if(str.length === 0 ) return true;
  let spaced = false;

  let arr = str.split("").map((x)=>{
    if(x >= 'a' && x <= 'z' ? x : " "){
        return x = x.toLowerCase();
    }
    if(!spaced){
      spaced = true;
      return " ";
    }else{
      spaced = false;

    }
  });

  arr = arr.join("").trim().split(" ").filter((x)=> { return x;});
  console.log("this is new str after map:", arr);
  if(arr.length % 2 === 1) return false;
  let lp = 0;
  let rp = str.length - 1;


  while(rp < lp){
    if(arr[lp] !== arr[rp]){
      return false;
    }
    lp++;
    rp--;
  }
  return true;
}

module.exports = matchWord;
=======
"use strict";
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let arr = str.split("").map((char)=>{
    return char.match(/[a-zA-Z]/) ? char : " ";
  });
  arr = arr.join("").trim().split("");
  let l = 0;
  let r = arr.length - 1;


  while(l < r){
    console.log(arr[l]);
    console.log(arr[r]);

    if(arr[l] !== arr[r]) return false;

    l++;
    r--;
  }
  return true;
}

console.log(matchWord('__END___DNE__'));
//module.exports = matchWord;
>>>>>>> b88518ba4a825daf714355ece5267450fc502e08
