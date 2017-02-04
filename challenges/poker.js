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

function createDeck(){
  let deck = [];
  let club , spade, heart, diamond;

  for(let i = 0; i < 13; i++){
    club = {suit: 'club', face: i}, spade = {suit: 'spade', face: i}, heart = {suit: 'heart', face: i}, diamond = {suit: 'diamond', face: i};
    deck.push(club, spade, heart, diamond);
  }
  return deck;
}

function getRandomCard(deck){
  let num = Math.random() * deck.length;
  return deck.splice(num, 1)[0];
}

function determineBestHand(hand){
  //hands ranked from 0 -8
  let inOrder = true;
  let flush = true;

  for(let i = 0; i < 4; i++){
    if(hand[i].face + 1 !== hand[i].face){
      inOrder = false;
    }
    if(hand[i])
  }
}

function winner(){

}

function poker(hand1, hand2) {
  let sort = (a, b) => {
    return a.face - b.face;
  };

  hand1.sort(sort);
  hand2.sort(sort);

  console.log('hand1: ', hand1);
  console.log('hand2: ', hand2);

  let position1 = determineBestHand(hand1);
  let position2 = determineBestHand(hand2);

  let result = winner(position1, position2);

  if(result === position1){
    return "Player 1 wins";
  }else if(result === position2){
    return "Player 2 wins";
  }else{
    return "Draw";
  }
}

let deck = createDeck();
let hand1 = [], hand2 = [];

for(let i = 0; i < 5; i++){
  hand1.push(getRandomCard(deck));
  hand2.push(getRandomCard(deck));
}

console.log(poker(hand1, hand2));
module.exports = poker;
