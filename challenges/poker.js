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
  let cards = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14
  };

  let hands = {
    '4-of-a-kind': 10,
    'full house': 8,
    '3-of-a-kind': 6,
    '2-pair': 4,
    '1-pair': 2,
    'high card': 0,
  };

  function checkHand(hand) {
    const cache = {};
    let result;
      for(let i = 0; i < hand.length; i += 1) {
        if(cache[hand[i]]) {
        cache[hand[i]] += 1;
      }
      else {
        cache[hand[i]] = 1;
      }
    }
    console.log(Object.keys(cache));

  }

hand1Result = checkHand(hand1);
hand2Result = checkHand(hand2);
}

module.exports = poker;
