// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // convert each number to string
  // loop through the string
  // if instance of 2, add to counter
  // return counter after hitting num

  let counter = 0;
  for (let i = 2; i <= num; i++) {
    const numString = i.toString();
    for (let j = 0; j < numString.length; j++) {
      if (numString[j] === '2') {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = countTwos;