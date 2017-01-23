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
    if (!str) {
        return false;
    }
    let obj = {};
    for (let i=0; i<str.length; i++) {
        if (obj[str[i]]) {
            delete obj[str[i]];
        } else {
            obj[str[i]] = true;
        }
    }
    return Object.keys(obj).length <= 1;
	
}

console.log(permPalin('afdv'));

module.exports = permPalin;