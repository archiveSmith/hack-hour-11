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
  const result = []; // the array that we store our output in
  for (var i = 1; i <= num; i++) { // loop from 1 to num
    let f = i % 3 === 0, b = i % 5 === 0; // our fizz/buzz/fizzbuzz conditions
    result.push(f ? b ? "fizzbuzz" : "fizz" : b ? "buzz" : i); // if f and b, push fizzbuzz, otherwise f = fizz, and b = buzz. if nothing matches, push i.
  }
  return result; // return our array.
}

module.exports = fizzbuzz;
