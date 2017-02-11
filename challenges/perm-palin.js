/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 *///

function permPalin(str) {
    let permStack = [];

    for ( let i = 0; i < str.length; i++) {
        if (permStack.includes(str[i])){
            permStack.splice(permStack.indexOf(str[i]), 1);
        } else {
            permStack.push(str[i])
        }
    }
    if (permStack.length === 1 || permStack.length === 0) {
        return true;
    }
    return false;
}

module.exports = permPalin; 