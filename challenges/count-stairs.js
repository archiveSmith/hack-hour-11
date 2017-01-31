/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function checkCombo(combo, arr) {
	if (arr.indexOf(combo) >= 0) {
		return true;
	} else {
		return false;
	}
}

function countStairs(n) {
	var ways = [];
	for (var i = 0; i < n; i++) {
		var steps = 0;
		for (var s = 1; s <= 2; s++) {
			var combo = s;
			for (var j = 0; j < n; j++) {
				var added = 0;
				console.log("combo: ", combo);
				if (eval(combo) < n && !checkCombo(combo+"+1", ways)) {
					combo = combo + "+1";
					added = 1;
				}

				if (eval(combo) < n && !checkCombo(combo+"+2", ways) && !added) {
					combo = combo + "+2";
				}

				if (eval(combo) === n) {
					ways.push(combo);
					break;
				}
			}
		}
			
	}

	return ways;
}

console.log(countStairs(11));

module.exports = countStairs;
