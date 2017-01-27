<<<<<<< HEAD
// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting 
// from 1 to n (inclusive). 2222 counts as having 4 2s.
=======
// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
<<<<<<< HEAD
  let count = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num.toString().length; j++) {
      if (i.toString()[j] === '2') count += 1;
    }
  }
  return count
=======

>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
}

module.exports = countTwos;