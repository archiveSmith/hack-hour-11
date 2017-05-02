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

    let resultSoFar = true;

    for (let i=0; i<input.length; i++) {
        if (!resultSoFar) {
            return false;
        }
            
        //console.log('i is: ' + i);
        console.log('input i is: ' + input[i]);
        if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
             return false;
        } 
        if (input[i] === '(') {
             i++;
             i = recurseParens(i);
             //console.log('i is now... ' + i);
        }
        if (input[i] === '{') {
             i++;
             i = recurseCurlies(i);
             //console.log('i is now... ' + i);
        }
        if (input[i] === '[') {
             i++;
             i = recurseBrackets(i);
             //console.log('i is now... ' + i);
        }
    }

    


    function recurseParens(loc) {
        console.log('in recurseparens');
        
        console.log('found parenthesis');
        for (let j=loc; j<input.length; j++) {
            console.log('input[j] is: ' + input[j]);
            
            if (input[j] === ']' || input[j] === '}') {
                console.log('found illegal bracket after open parenthesis: ' + input[j]);
                resultSoFar = false;
                return j;
            }
            if (input[j] === ')') {
               // console.log('found parenthesis');
                return j;
            }
            
            if (input[j] === '(') {
                j++;
                j = recurseParens(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '{') {
                j++;
                j = recurseCurlies(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '[') {
                j++;
                j = recurseBrackets(j);
                //console.log('j is now... ' + j);
            }

        }
        console.log('forgot to close parenthesis');
        resultSoFar = false;
        return input.length-1;

    }

    function recurseCurlies(loc) {
        console.log('in recursecurlies');

        console.log('found curly');
        for (let j=loc; j<input.length; j++) {
           console.log('input[j] is: ' + input[j]);
            
            if (input[j] === ']' || input[j] === ')') {
                console.log('found illegal bracket after open curly: ' + input[j]);
                resultSoFar = false;
                return j;
            }
            if (input[j] === '}') {
                console.log('found curly');
                return j;
            }

            if (input[j] === '(') {
                j++;
                j = recurseParens(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '{') {
                j++;
                j = recurseCurlies(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '[') {
                j++;
                j = recurseBrackets(j);
                //console.log('j is now... ' + j);
            }

        }
        console.log('forgot to close curlies');
        resultSoFar = false;
        return input.length-1;

    }

    function recurseBrackets(loc) {
        console.log('in recursebracket');
        console.log('found bracket');
        for (let j=loc; j<input.length; j++) {
            console.log('input[j] is: ' + input[j]);
            
            if (input[j] === ')' || input[j] === '}') {
                console.log('found illegal bracket after open bracket: ' + input[j]);
                resultSoFar = false;
                return j;
            }
            if (input[j] === ']') {
                console.log('found bracket');
                return j;
            }

            if (input[j] === '(') {
                j++;
                j = recurseParens(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '{') {
                j++;
                j = recurseCurlies(j);
                //console.log('j is now... ' + j);
            }
            if (input[j] === '[') {
                j++;
                j = recurseBrackets(j);
                //console.log('j is now... ' + j);
            }

        }
        console.log('forgot to close brackets');
        resultSoFar = false;
        return input.length-1;

    }

    return resultSoFar;
    // recurseBrackets() {

    // }

    // recurseCurlies() {

    // }

}

console.log(balancedParens('hi(my [ name { } ] ) '))

module.exports = balancedParens;
