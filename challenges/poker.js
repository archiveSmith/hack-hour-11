/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

function poker(hand1, hand2) {
let hand1Res;
let hand2Res;
hand1 = hand1.join('');
hand2 = hand2.join('');
let winOrder = ['4-of-a-kind', 'full house', 'straight', '3-of-a-kind', '2-pair', 'pair', 'high card'];
if(find4(hand1)) hand1Res = '4-of-a-kind';
if(find4(hand2)) hand2Res = '4-of-a-kind';

if(findFull(hand1)) hand1Res = 'full house';
if(findFull(hand2)) hand2Res = 'full house';

if(find3(hand1)) hand1Res = '3-of-a-kind';
if(find3(hand2)) hand2Res = '3-of-a-kind';

if(find2P(hand1)) hand1Res = '2-pair';
if(find2P(hand2)) hand2Res = '2-pair';

if(findPair(hand1)) hand1Res = 'pair';
if(findPair(hand2)) hand2Res = 'pair';

if(findHighCard(hand1) > findHighCard(hand2) && !hand1Res) hand1Res = 'high card';
if(findHighCard(hand1) < findHighCard(hand2) && !hand2Res) hand2Res = 'high card';

console.log(hand1Res, hand2Res)
if(winOrder.indexOf(hand1Res) === winOrder.indexOf(hand2Res)) return "Draw";
if(winOrder.indexOf(hand1Res) < winOrder.indexOf(hand2Res)) return "Player 1 wins";
if(winOrder.indexOf(hand1Res) > winOrder.indexOf(hand2Res)) return "Player 2 wins";
}

function findHighCard(arr){
	return Math.max(...arr);
}


function findPair(arr){
	for(let i = 0; i < arr.length; i++){
	  let a = new RegExp(arr[i],'g')
		if(arr.match(a).length === 2) return true;
	}

	return false;
}



function find2P(arr){
	let count = 0;
	for(let i = 0; i < arr.length; i++){
	  let a = new RegExp(arr[i],'g')
		if(arr.match(a).length === 2){
		  arr = arr.split('');
			let b = arr.splice(i,1);
			let a = arr.lastIndexOf(b);
			arr.splice(a,1);
			arr = arr.join('');
			i = -1;
			count++;
		}
	}

	if(count > 1) return true;
	return false;
}



function find3(arr){
	for(let i = 0; i < arr.length; i++){
	  let a = new RegExp(arr[i],'g')
			if(arr.match(a).length === 3) return true;	
	}
	return false;
}



function findFull(arr){
  arr = arr.split('');
	arr = arr.sort((a,b)=> a<b);
	arr = arr.join('');
	let a = new RegExp(arr[0],'g')
	let b = new RegExp(arr[4],'g')
	if(arr.match(a).length === 3 && arr.match(b).length === 2) return true;
	if(arr.match(a).length === 2 && arr.match(b).length === 3) return true;
	return false;
}


function find4(arr){
  let a = new RegExp(arr[0],'g')
  let b = new RegExp(arr[1],'g')
	if(arr.match(a).length === 4) return true;
	if(arr.match(b).length === 4) return true;
	return false;
}

module.exports = poker;
