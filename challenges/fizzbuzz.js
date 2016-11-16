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
  const result = [];
  let i = 1;
  for (i; i <= num; i += 1) {
    let fb = '';
    if (i % 3 === 0) fb += 'fizz';
    if (i % 5 === 0) fb += 'buzz';
    if (fb) result.push(fb);
    else result.push(i);
  }
  return result;
}




function fizzbuzz2(num){
	const result = [];
  let i = 1;
  for (i; i <= num; i += 1) {
  	result.push(i);
  };
  result.map(val => {
  	if (i % 3 === 0) val = 'fizz';
    if (i % 5 === 0) val = 'buzz';
    if (i % 3 === 0 && i % 5 === 0) val = 'fizzbuzz';
    return val;
  })
  return result;
}


module.exports = fizzbuzz;
