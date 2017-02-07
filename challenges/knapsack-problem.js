/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, maxVal = 0) {
    if(items[0] === undefined) return maxVal;
    let currentVal = items[0]['value'];
    let currentWeight = items[0]['weight']
    for(let i = 1; i < items.length; i++) {
      currentVal += items[i]['value']
      if(currentWeight + items[i]['weight'] <= weightAvailable){
        if(currentVal > maxVal) {
          maxVal = currentVal
        }
        currentWeight += (items[0]['weight'] + items[i]['weight'])
      }
    }
    items.shift()
    return solveKnapsack(items, weightAvailable, maxVal)
}

module.exports = solveKnapsack;
