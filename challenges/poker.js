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
	let one = ofAKind(hand1)
	let two = ofAKind(hand2)
  function ofAKind(hand) {
  	let ans = [];
    let obj = {};
    for (let i = 0; i < hand.length; i++) {
      !obj[hand[i]] ? obj[hand[i]] = 1 : obj[hand[i]] += 1;
    }
    let keys = Object.keys(obj)
   for(let i=0; i<keys.length; i++){
     if(obj[keys[i]]>=2){
     	let str = keys[i] + ', ' + obj[keys[i]];
       ans.push(keys[i])
       ans.push(obj[keys[i]])
     }
   }
	return ans;
  }

 if(one[1]>two[1]){
 	console.log('hi')
 	 return 'Player 1 Wins'
 }else if(one[1]<two[1]){
 	return 'Player 2 Wins'
 }else if(one[1]===two[1]){
 	if(Number(one[0])> Number(two[0])){
 		return 'Player 1 Wins'
 	}else if (one[0]< two[0]){
 			return 'Player 2 Wins'
 	}else{
 		return 'Its a draw'
 	}
 }
} 

// poker([3,8,8,8,2], [4,8,7,8,8])

module.exports = poker;
