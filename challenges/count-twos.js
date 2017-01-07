// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
<<<<<<< HEAD
	let twos = 0;
	for(let i = 0; i <= num; i++){
		let inTwo = i.toString().match(/2/g);
		let tw = 0;
		if(inTwo) tw = inTwo.length;
		twos += tw;
	}
	return twos;
=======
>>>>>>> 58b135ebc1438c1e5275c8ffd9ccde40985bef54

}

module.exports = countTwos;