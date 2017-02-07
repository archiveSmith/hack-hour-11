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
  let itemsWeights = [];
  let result = 0;
  let k = 0;
  for (let i = 0; i < items.length; i++) {
    const density = items[i].value / items[i].weight
    itemsWeights.push({"density": density, "weight": items[i].weight, "value": items[i].value});
  }
  itemsWeights.sort((a,b) => a.density < b.density);
  console.log(itemsWeights);
  while (weightAvailable > 0) {
    if (!itemsWeights[k]) return result;
    if (itemsWeights[k].weight < weightAvailable) {
      result += itemsWeights[k].value;
      weightAvailable -= itemsWeights[k].weight;
    }
    k += 1;
  }
  return result;
};

module.exports = solveKnapsack;
