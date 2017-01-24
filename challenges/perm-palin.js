/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	let newStr = '';
  for(let i = 0; i<str.length; i++){
    for(let j = 1; j<str.length; j++){
      if(str.charAt(i)=== str.charAt(j)){
        newStr += str.charAt(j)
        console.log(newStr)
      }
    }
  }
}


// function permPalin(str) {
// 	let newStr = '';
//   for(let i = 0; i<str.length; i++){
//     for(let j = 1; j<str.length; j++){
//       if(str.charAt(i) === str.charAt(j)){
//         newStr += str.charAt(i);
//        str.slice(str.charAt(i), 1)
//         console.log(newStr)
//       }
//     }
//   }
// }


module.exports = permPalin;