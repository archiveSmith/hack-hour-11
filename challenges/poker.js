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
  hand1 = hand1.sort((a,b) => a - b);
  hand2 = hand2.sort((a,b) => a - b);
  const table1 = {};
  const table2 = {};
  const result1 = [];
  const result2 = [];
  for (let i = 0; i < hand1.length; i += 1) {
    table1[hand1[i]] ? table1[hand1[i]] += 1 : table1[hand1[i]] = 1;
  }
  for (let j = 0; j < hand2.length; j += 1) {
    table2[hand2[j]] ? table2[hand2[j]] += 1 : table2[hand2[j]] = 1;
  }
  for (let card1 in table1) {
    if (table1[card1] === 4) {
      for (let k = 0; k < 4; k += 1) {
        result1.push(card1);
      }
    }
    if (table1[card1] === 3) {
      for (let l = 0; l < 3; l += 1) {
        result1.push(card1);
      }
    }
    if (table1[card1] === 2) {
      for (let m = 0; m < 2; m += 1) {
        result1.push(card1);
      }
    }
  }
  for (let card2 in table2) {
    if (table2[card2] === 4) {
      for (let n = 0; n < 4; n += 1) {
        result2.push(card2);
      }
    }
    if (table2[card2] === 3) {
      for (let p = 0; p < 3; p += 1) {
        result2.push(card2);
      }
    }
    if (table2[card2] === 2) {
      for (let r = 0; r < 2; r += 1) {
        result2.push(card2);
      }
    }
  }
  if (result1.length === result2.length) {
    if (result1[0] === result1[3] && result2[0] === result2[3]) {
      return result1[0] > result2[0] ? "Player 1 wins" : "Player 2 wins";
    }
  }
}

module.exports = poker;
