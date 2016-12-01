/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let matches;
    let openBrackets;

    matches = {'[':']','{':'}','(':')'};
    openBrackets = [];

    for(let i = 0; i < input.length; i += 1) {
        character = input.charAt(i);

        if(character in matches) {
            openBrackets.push(character);
        } 
        
        else if(character === ']' || character === '}' || character === ')') {
                if(matches[openBrackets.pop()] !== character) {
                    return false;
                }
            }
        }
        return !openBrackets.length;

    }

    
//change input to an array
//iterate through the array, and if you find an open bracket {[(, then add one to count. if you find a closing bracket, take one off of count.
    // if (count === 0) return true;  count will be 0 if all brackets have a match

module.exports = balancedParens;
