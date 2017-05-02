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
  
  const len = items.length + 1;
  //console.log(len)
  const result = new Array(len + 1);
  
  for (let i = 0; i < len + 1; i += 1) {
    result[i] = new Array( weightAvailable + 1);
  }

  for (let j = 0; j < len + 1; j += 1) {
    for (let w = 0; w < weightAvailable + 1; w += 1) {
      if (j === 0 || w === 0) {
        result[j][w]= 0;
      } else if (items[j - 1] && items[j - 1].weight <= w) {
        //console.log(items[j - 1]);
        result[j][w] = Math.max(items[j - 1].value + result[j - 1][w - items[j - 1].weight], result[j - 1][w])
      } else {
        result[j][w] = result[j - 1][w]
      }
    }
  }

  return result[len][weightAvailable];
}

module.exports = solveKnapsack;
