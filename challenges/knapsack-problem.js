'use strict';
/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  if(!items || items.length === 0) return 0;
  let highestValue = -Infinity;

  function recurse(index, weight, value){
    if(value > highestValue) highestValue = value;
    if(index >= items.length) return;

    if(items[index].weight + weight <= weightAvailable){
      let newIndex = index + 1;
      recurse(newIndex, items[index].weight + weight, value + items[index].value);
    }
    recurse(++index, weight, value);
  }

  recurse(0, 0, 0);
  return highestValue;
};

module.exports = solveKnapsack;
