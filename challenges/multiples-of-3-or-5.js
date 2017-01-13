'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  
  for (let i = 3; i < 1000; i += 3) {
    sum += i;
  }
  
  for (let j = 5; j < 1000; j += 5) {
    sum += j;
  }

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  
  for (let x2 = x; x2 < 1000; x2 += x) {
    sum += x2;
  }
  
  for (let y2 = y; y2 < 1000; y2 += y) {
    sum += y2;
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
