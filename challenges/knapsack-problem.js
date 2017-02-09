/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/


function solveKnapsack(items, weightAvailable, score = 0) {
  // items.forEach((el)=> el['score'] = (el.value/el.weight) )
  // items.sort((a,b) =>  b.score - a.score)
  // for (let i = 0; weightAvailable && i < items.length; i++){
  //   weightAvailable > i.weight ? 
  // }
  console.log(score, weightAvailable)
  if (weightAvailable <= 0) return 0;
  if (weightAvailable === 0) return score;
  if (items.length) console.log("BB", solveKnapsack(items.slice(1), (weightAvailable - items[0].weight), score + items[0].value), solveKnapsack(items.shift(), score))
};


let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

console.log(solveKnapsack(items, 110))
module.exports = solveKnapsack;
