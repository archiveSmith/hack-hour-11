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


// vvv solution #1 vvv
function fizzbuzz(num) {
  const fizzBuzzArray = [];
  let i = 1;
  for (; i <= num; i++) {
    if (i % 15 === 0) {
      fizzBuzzArray.push('fizzbuzz');
    } else if (i % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else if (i % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push(i);
    }
  }

  return fizzBuzzArray;
}



// vvv solution #1 reversed vvv
function fizzbuzz2(num) {
  const fizzBuzzArray = [];
  let i = num;
  for (; i >= 1; i--) {
    if (i % 15 === 0) {
      fizzBuzzArray.push('fizzbuzz');
    } else if (i % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else if (i % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push(i);
    }
  }

  return fizzBuzzArray;
}



module.exports = fizzbuzz;



