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
  function combos(arr) {
    this.HC = (function(arr) {
      return Math.max(...arr);
    })(arr);
    this.OP = (function(arr) {
      const sorted = arr.slice().sort((a, b) => {
        return b - a;
      });
      const results = [];
      for (let i = 0; i < 4; i += 1) {
        if (sorted[i + 1] === sorted[i]) {
          results.push(sorted[i]);
        }
      }
      if (!results.length) return false;
      return results[0];
    })(arr);
    this.TP = (function(arr) {
      const sorted = arr.slice().sort((a, b) => {
        return b - a;
      });
      const results = [];
      for (let i = 0; i < 4; i += 1) {
        if (sorted[i + 1] === sorted[i]) {
          if (!results.includes(sorted[i])) {
            results.push(sorted[i]);
          }
        }
      }
      if (results.length < 2) return false;
      return [results[0], results[1]];
      
    })(arr);
    this.TK = (function(arr) {
      const sorted = arr.slice().sort((a, b) => {
        return b - a;
      });
      for (let i = 0; i < 3; i += 1) {
        if (sorted[i + 2] === sorted[i + 1] && sorted[i + 1] === sorted[i]) {
          return sorted[i];
        }
      }
      return false;
    })(arr);
    this.ST = (function(arr) {
      const sorted = arr.slice().sort((a, b) => {
        return a - b;
      });
      for (let i = 0; i < 4; i += 1) {
        if (sorted[i + 1] - sorted[i] !== 1) return false;
      }
      return sorted[4];
    })(arr);
    this.FH = (function(tk, op) {
      if (!op) return false;
      if (!tk) return false;
      if (tk === op) return false;
      return [tk, op];
    })(this.TK, this.OP);
  };
  const h1 = new combos(hand1);
  const h2 = new combos(hand2);
  console.log('hand1:', h1);
  console.log('hand2:', h2);
  const keys = Object.keys(h1).reverse();
  for (let i = 0 ; i < keys.length; i += 1) {
    if (h1[keys[i]] && h2[keys[i]]) {
      if(h1[keys[i]] === h2[keys[i]]) return "Draw";
      if(h1[keys[i]] > h2[keys[i]]) return "Player 1 wins";
      if(h1[keys[i]] < h2[keys[i]]) return "Player 2 wins";
    }
    if (h1[keys[i]]) return "Player 1 wins";
    if (h2[keys[i]]) return "Player 2 wins";
  }
}

console.log(poker([3,5,5,5,2], [4,3,3,8,3]));

module.exports = poker;
