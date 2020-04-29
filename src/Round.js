const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.currentRound = deck
        this.currentCard = deck.cards[0];
        this.turns = 0
        this.inCorrectGuesses = [];
    }

     returnCurrentCard() {
         return this.currentCard;
     }

     takeTurn() {
        const turn = new Turn(guess, this.currentCard);
        this.turns++
        if(turn.evaluateGuess() === false) {
            this.inCorrectGuesses.push(this.currentCard.id)
        };
        const nextCard = (this.deck.cards.indexOf(this.currentCard) + 1)
        this.currentCard = this.deck.cards[nextCard];
        return turn.giveFeedback();
    }

     calculatePercentCorrect(){
        const correctGuesses = this.turnCounter - this.incorrectGuesses.length;
        const correctGuessesPercent = (correctGuesses / this.turnCounter) * 100;
        return Math.round(correctGuessesPercent);
     }
     
     endRound() {
         return console.log(`** Round over! ** You answered ${percentRight} of the questions correctly!’`)
     }
}

module.exports = Round;