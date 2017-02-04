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
create object with all possible hands that give you points
loop through and check for each one starting with most complex
assign it to a variable.
*/

function poker(hand1, hand2) {
	handOne = hand1.sort((a,b) => {
		return a - b
	})
	handTwo = hand2.sort((a,b) => {
		return a - b
	})

	function fourChecker(hand) {
		let counter = 0;
		for (let i = 0; i < hand.length; i++){
			if (hand[i] === hand[i+1]){
				counter++
			}
			else{
				counter = 0
			}
			if (counter => 4){
				return true
			}


		}
		return false
	}

	function fullChecker(hand) {
		if (hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]){
			return true
		}
		else if (hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4]){
			return true
		}
		else return false

	}

	function straight(hand){
		for (let i = 0; i < hand.length; i++) {
			if (hand[i]  hand[i+1]){
				return false
			}
		}
		return true
	}



	console.log(straight(handOne))
}

console.log(poker([1,3,2,4,5], [4,6,7,8,8]) )



module.exports = poker;
