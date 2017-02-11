/*Build a function that takes in two arrays of five elements, with each
* array repcountenting a player's hand and each element
* repcountenting a card from a standard deck of cards:
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
  const res1 = checker(hand1);
  const res2 = checker(hand2);

  if (res1[0][0] > res2[0][0]) return "Player 1 wins";
  if (res2[0][0] > res1[0][0]) return "Player 2 wins";
  if (res1[0][0] === res2[0][0]) {
    if (res1[0][1] > res2[0][1]) return "Player 1 wins";
    if (res2[0][1] > res1[0][1]) return "Player 2 wins";
    if (res1[0] === 6) {
      if (res1[0][2] > res2[0][2]) return "Player 1 wins";
      if (res2[0][2] > res1[0][2]) return "Player 2 wins";
      else return "Draw";
    }
    if (res1[1] && !res2[1]) return "Player 1 wins";
    if (res2[1] && !res1[1]) return "Player 2 wins";
    if (res1[1][1] > res2[1][1]) return "Player 1 wins";
    if (res2[1][1] > res1[1][1]) return "Player 2 wins";
    if (res1[1][1] === res2[1][1]) {
      if (res1[2][1] > res2[2][1]) return "Player 1 wins";
      if (res2[2][1] > res1[2][1]) return "Player 2 wins";
    }
    else return "Draw";
  }

  function checker(hand) {
    const count = {};
    const res = [];
    let FoaK = false;
    let FH = false;
    let ToaK = false;
    let TP = false;
    hand.forEach((card) => {
      if (!count[card]) count[card] = 1;
      else count[card] += 1;
    });
    for (card in count) {
      if (count[card] === 4) {
        res.push([7, card]);
        FoaK = true;
      }
      if (count[card] === 3) {
        res.push([4, card]);
        ToaK = true;
      }
      if (count[card] === 2) {
        res.push([2, card]);
        TP = true;
      }
      if (count[card] === 1) {
        res.push([1, card]);
      }
    }
    if (ToaK === true && TP === true) {
      if (res[0][0] === 4) res.unshift([6, res[0][1], res[1][1]]);
      else res.unshift([6, res[1][1], res[0][1]]);
      FH = true;
    }
    else if (FoaK === false && FH === false) {
      let sorted = hand.sort((a, b) => a - b);
      let count = 0;
      for (let i = 1; i < 5; i += 1) {
        if (hand[i] - hand[i - 1] === 1) count += 1;
      }
      if (count === 4) res.push([5, hand[4]])  
    }

    res.sort((a, b) => {
      if (a[0] === b[0]) {
        const x = a[1];
        const y = b[1];
        return y < x ? -1 : y > x ? 1 : 0;
      }
      return b[0] - a[0]
    });
    // console.log(res);
    return res;
  }
}

module.exports = poker;

// console.log(poker([1, 1, 1, 2, 2], [1, 1, 1, 3, 3]));
