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
	var greatestValue = 0;
	for (var i = 0; i < items.length; i++) {
		var currentWeight = 0;
		var currentValue = 0;
		for (var j = 0; j < items.length; j++) {
			if (i !== j) {
				if (currentWeight + items[j].weight <= weightAvailable) {
					currentValue += items[j].value;
					currentWeight += items[j].weight;
				}
			}
		}

		if (currentValue > greatestValue) {
			greatestValue = currentValue;
		}
	}

	return greatestValue;
};

// var items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

// console.log(solveKnapsack(items, 5));

module.exports = solveKnapsack;
