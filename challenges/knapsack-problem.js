/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let value = 0;
  let weights = [];
  for (let i = 0 ; i < items.length; i += 1) {
    weights.push(items[i].weight);
  }
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);
  let minWeight = Math.min(...weights);
  const weight = weightAvailable;
  while (weight > minWeight) {
    
  }
  console.log(minWeight);

};

const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

console.log(solveKnapsack(items, 3));

module.exports = solveKnapsack;
