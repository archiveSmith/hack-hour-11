// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {

  if (Number.isNaN(parseInt(num))) {
    throw new Error('The given parameter is NaN');
  } else if (num < 1) {
    throw new Error('The fizzbuzz function takes in a number greater than 0.');
  } 

  const arr = [];
  let counter = 1;

  while (counter <= num) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      arr.push('fizzbuzz');
    } else if (counter % 3 === 0) {
      arr.push('fizz');
    } else if (counter % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(counter);
    }
    counter += 1;
  }

  return arr;
}

module.exports = fizzbuzz;
