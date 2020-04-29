const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.currentRound = deck
        this.currentCard =  deck.cards[0];
        this.turns = 0
        this.inCorrectGuesses = [];
    }

     returnCurrentCard() {
         return this.currentCard;
     }

     takeTurn() {
        const turn = new Turn(guess, this.currentCard);
        this.turns++
        this.currentCard();
        turn.evaluateGuess();
        turn.giveFeedback();
        if(turn.giveFeedback === 'incorrect') {
            push.inCorrectGuesses(this.currentCard)
        }
     }

     calculatePercentCorrect(){
        const percentRight = (this.turns / this.inCorrectGuesses.length) * 100 
     }

     endRound() {
         return `** Round over! ** You answered ${percentRight} of the questions correctly!’`
     }
}

module.exports = Round;