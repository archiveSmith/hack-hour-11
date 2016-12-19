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
  if (typeof str !== 'string') return undefined;
  const letterCounts = {};
  const strArr = str.split('');
  const len = strArr.length;
  for (let i = 0; i < len; i += 1) {
    if (letterCounts[strArr[i]]) letterCounts[strArr[i]] += 1;
    else letterCounts[strArr[i]] = 1;
  }
  const evenOddCount = Object.values(letterCounts);
  let oddCount = 0;
  evenOddCount.forEach((num) => {
    if (num % 2 !== 0) oddCount += 1;
  });

  return oddCount <= 1;
}

module.exports = permPalin;