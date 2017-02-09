/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, len = items.length) {
  const combos = [[]];

  let combo;

  for (let i = 0; i < items.length; i += 1) {
    for (let j = 0, len = combos.length; j < len; j += 1) {
      combo = combos[j].concat(items[i]);
      combos.push(combo);
    }
  }

  return combos.slice(1)
  .filter(combo => combo.reduce((a, c) => a.weight + c.weight) <= weightAvailable ? true : false)
  .reduce((acc, cur) => cur.reduce((a, c) => a.weight + c.weight) > acc.reduce((a, c) => a.weight + c.weight) ? cur : acc)
  .reduce((a, c) => a.value + c.value);
};

const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
console.log(solveKnapsack(items, 3));
console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;
