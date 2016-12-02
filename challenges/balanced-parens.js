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

    for (let i=0; i<input.length; i++) {
        console.log('i is: ' + i);
        console.log('input i is: ' + input[i]);
        // if (input[i] === ')' || ']' || '}') {
        //     return false;
        // } 
        if (input[i] === '(') {
            i++;
            i = recurseParens(i);
            console.log('i is now... ' + i);
        }
        
        if (i === false) {
            console.log('recurse parens returned false');
            return false;
        }



    }


    function recurseParens(loc) {
        console.log('found parenthesis');
        for (let j=loc; j<input.length; j++) {
            console.log('input[j] is: ' + input[j]);
            
            // if (input[j] === ']' || '}') {
            //     console.log('found illegal bracket after open parenthesis');
            //     return false;
            // }
            if (input[j] === ')') {
                console.log('found parenthesis');
                return j;
            }

        }
        

    }

    // recurseBrackets() {

    // }

    // recurseCurlies() {

    // }

}

balancedParens('hi(my name is anto)lol');

module.exports = balancedParens;
