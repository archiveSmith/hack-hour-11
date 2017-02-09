/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
  calc all possibilities that are within weight range
  you have a nested array with arrays of sums that match

  put into array, then console log the biggest one, like subset sum

  how many options less than available
*/

function solveKnapsack(items, weightAvailable) {





};


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
}

var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

var things = [1,2,3,4]

console.log(getCombs(things))


module.exports = solveKnapsack;
