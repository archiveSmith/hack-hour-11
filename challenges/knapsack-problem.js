/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, cache = [], sum = 0) {
  let weightAvailableCopy = weightAvailable
  
  for (let i = 0; i < items.length; i += 1) {
    if (weightAvailableCopy - items[i].weight < 0) ;
    else {sum += items[i].value
    weightAvailableCopy = weightAvailableCopy - items[i].weight
    solveKnapsack(items.slice(0, i).concat(items.slice(i + 1)), weightAvailable, cache)}
  }
  
  cache.push(sum)
  
  return Math.max(...cache)
}

module.exports = solveKnapsack;
