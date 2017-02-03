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
    values = {
        'Four of a Kind': 7,
        'Full House': 6,
        'Straight': 5,
        'Three of a Kind': 4,
        'Two Pair': 3,
        'Pair': 2,
        'High Card': 1,
    }

    // if (values[computeBest(hand1)[0]] > values[computeBest(hand2)[0]]) return 'Player 1 wins with a ' + computeBest(hand1)[0] + '!';
    // if (values[computeBest(hand1)[0]] < values[computeBest(hand2)[0]]) return 'Player 2 wins with a ' + computeBest(hand2)[0] + '!';

    // if (values[computeBest(hand1)[0]] === values[computeBest(hand2)[0]]){
    //     if (computeBest(hand1)[1] > computeBest(hand2)[1]) return 'Player 1 wins with a ' + computeBest(hand1)[0] + ' with high card ' + computeBest(hand1)[1] + '!';
    //     if (computeBest(hand1)[1] < computeBest(hand2)[1]) return 'Player 2 wins with a ' + computeBest(hand2)[0] + ' with high card ' + computeBest(hand2)[1] + '!';
    //     if (computeBest(hand1)[1] === computeBest(hand2)[1]) return 'DRAW!';
    // };

    if (values[computeBest(hand1)[0]] > values[computeBest(hand2)[0]]) return 'Player 1 wins';
    if (values[computeBest(hand1)[0]] < values[computeBest(hand2)[0]]) return 'Player 2 wins';

    if (values[computeBest(hand1)[0]] === values[computeBest(hand2)[0]]){
        if (computeBest(hand1)[1] > computeBest(hand2)[1]) return 'Player 1 wins';
        if (computeBest(hand1)[1] < computeBest(hand2)[1]) return 'Player 2 wins';
        if (computeBest(hand1)[1] === computeBest(hand2)[1]) return 'DRAW!';
    };

    function computeBest(hand) {
        let poss = {
          fourOfAKind: 0,
          fullHouse: 0,
          straight: 0,
          threeOfAKind: 0,
          twoPair: 0,
          pair: 0,
          highCard: 0,
        }
        let currStraight = 0;
        let result = [];
        
        for (let i=0; i<hand.length; i++) {
            // console.log('card is: ', hand[i])
            if (hand[i] > poss['highCard']) {
                    poss['highCard'] = hand[i];
                }
            if (result[hand[i]] === undefined){
                result[hand[i]] = 1;
            } else {
                result[hand[i]]++;
            }
            
            if (result[hand[i]] === 4) {
                // console.log('found 4 of a kind')
                poss['fourOfAKind'] = hand[i];
                return ['Four of a Kind', poss['fourOfAKind']];
            }
            if (result[hand[i]] === 3) {
                // console.log('found 3 of a kind')
                if (poss['pair'] > 0 && poss['pair'] !== hand[i]) {
                    // console.log('fullhouse')
                    poss['fullHouse'] = Math.max(poss['pair'], hand[i]);
                }
                poss['threeOfAKind'] = hand[i];
            }
            if (result[hand[i]] === 2) {
                // console.log('found pair')
                if (poss['threeOfAKind'] > 0) {
                    // console.log('fullhouse')
                    poss['fullHouse'] = Math.max(poss['threeOfAKind'], hand[i]);
                }
                if (poss['pair'] > 0) {
                    // console.log('found 2 pairs')
                    poss['twoPair'] = Math.max(poss['pair'], hand[i]);
                }
                
                poss['pair'] = hand[i];
            }
                
            
        }


        for (let i=0; i<result.length; i++) {
            if (result[i] > 0) {
                currStraight++;
            }
            if (currStraight === 5) {
                poss['straight'] = i;
                break;
            }
            if (currStraight === 4 && i === 5 && result[14] > 0) {
                poss['straight'] = i;
                break;
            } else {
                currStraight = 0;
            }
        }
 
        // console.log(poss);
        if (poss['fullHouse'] > 0) return ['Full House', poss['fullHouse']]; 
        else if (poss['straight'] > 0) return ['Straight', poss['straight']]; 
        else if (poss['threeOfAKind'] > 0) return ['Three of a Kind', poss['threeOfAKind']]; 
        else if (poss['twoPair'] > 0) return ['Two Pair', poss['twoPair']]; 
        else if (poss['pair'] > 0) return ['Pair', poss['pair']];
        else if (poss['highCard'] > 0) return ['High Card', poss['highCard']];




        console.log(result);
    }

    

}


console.log(poker([2,4,4,4,4],[2,8,2,2,8]));
module.exports = poker;
