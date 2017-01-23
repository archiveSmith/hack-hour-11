/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power < 0) {
        power = power * -1;
        return "1/" + pow(base, power);
    }

    if (power === 0) return 1;

    return base * pow(base, power-1);    
}

function guessNumber(num, max) {
    
    let guessCount = 0;

    function recurse(num, start, max) {
        console.log('Tries: ' + (guessCount))
        if (num === parseInt((start + max)/2)) {
            console.log('Your number was ' + num)
            return 1;
        }

        if (num > parseInt((start + max)/2)) {
            console.log(num + ' is greater than ' + parseInt((start +max)/2));
            guessCount++;
            start = parseInt((start + max)/2);
            // console.log('start is now ' + start);
            // console.log('max is now ' + max);
            //console.log('number to check with: ' + ((max+start)/2));
            return recurse(num, start, max);
        }
        if (num < parseInt((start + max)/2)) {
            console.log(num + ' is less than ' + parseInt((start + max)/2));
            guessCount++;
            max = parseInt((start + max)/2);
            // console.log('start is now ' + start);
            // console.log('max is now ' + max);
            //console.log('number to check with: ' + ((max+start)/2));
            return recurse(num, start, max)
        }
    }

    return recurse(num, 0, max+1);
}



guessNumber(501,1000);
//guessNumber(325,1000);

module.exports = pow;
