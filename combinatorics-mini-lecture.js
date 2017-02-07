// factorials are a number multiplied by itself and all descending positive intergers below it
const factorial = (num) => {
  if (num <= 1 || num % 1 !== 0) return 1;
  let res = 1;
  while (num > 0) {
    res *= num;
    num -= 1;
  }
  return res;
};

const factorialRecursive = (num, cur = 1) => {
  if (num <= 1) return cur;
  return factorialRecursive(num - 1, cur * num);
};

// outcomes = (number of possibilities)**(number of instances), 
// one occurance has no effect on the next
// we call these independent events,
// because one result does not change the probability of the result happening again
// example: how many numbers can be encoded with three binary digits?
// posibillities = 2 (0, 1)
// instances = 3
// 2**3 = 8 ( 0: 000, 1: 001, 2: 010, 3: 011, 4: 100, 5: 101, 6: 110, 7: 111)
// example: how many different results can we have with 2 flips of a coin?
// 4 (HH, HT, TH, TT)
const outcomes = (possibilities, instances) => (
  Math.pow(possibilities, instances)
);


// permutations are the calulation of a probability of dependent events,
// where order matters. (important)
// where each result of an instance changes the probability of
// that instance result happening again.
// number of permutaions is equal to the number of ways k  selected objects can be arranged
// from a set of n total objects
// # perm = (n)! / (n-k)!
// example: how many ways can you arange two people out of 3 for a photo people A, B, C
// 6 => AB, AC, BA, BC, CA, CB
const permutation = (selected, total) => (
  factorial(total) / factorial(total - selected)
);
// each occurance has a 1/permutation(k,n) chance of occuring

const getPerms = (itemsArr, len = itemsArr.length) => {
  const result = []; // permutations will be stored here
  // this is our recursive function that will populate the result arr
  function perm(items, cur = []) {
    if (cur.length === len) return result.push(cur); // base condition to end the recursive call
    let item;
    for (let i = 0; i < items.length; i += 1) {
      // get the ith item out of the array
      item = items.splice(i, 1)[0];
      // recurisve call with copy of items array and copy of cur with the item added
      perm(items.slice(), cur.concat(item));
      // place the item back in the array
      items.splice(i, 0, item);
    }
  }
  // use perm to populate result arr with possible permutations
  perm(itemsArr);
  return result;
};

// combinations dependent events, and are like permutation outcomes
// but where only grouping matters, not the order of selection
// they will always be less than the number of permutations
// for r selections from a set of n items, the formula is:
// #combinations = (n)! / (r!(n-r)!) 
// or the # of permutations divided by factorial of the selection
// # combination = perm(r,n)/factorial(r)
const combinations = (selection, total) => (
  factorial(total) / (factorial(selection) * factorial(total - selection))
);
const getCombs = (itemsArr, len = itemsArr.length) => {
  const results = [];
  function comb(items, cur = []) {
    if (cur.length === len) {
      results.push(cur);
    } else {
      for (let i = 0; i < items.length; i += 1) {
        comb(items.slice(i + 1), cur.concat(items[i]));
      }
    }
  }
  comb(itemsArr);
  return results;
};


// this should return all possible combinations of the inputed array
// getAllCombs([1,2,3]) => [1,2,3,12,13,23,123]
const getAllCombs = (itemsArr) => {

};

module.exports = { factorial, outcomes, permutation, getPerms, combinations, getCombs };

