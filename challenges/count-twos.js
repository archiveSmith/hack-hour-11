// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s 
//encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    if (num < 2) {
        return 0;
    }

    let result = 0;

    for (let i=0; i<num; i++) {
        let newNum = i.toString();
        for (let j=0; j<newNum.length; j++) {
            if (newNum[j] === '2') {
                result++;
            }
        }
    }
    return result;

}

console.log(countTwos(100));


// 10000 has 4000
// 1000 has 300
// 100 has 20
// 10 has 1

module.exports = countTwos;