const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

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

     takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns++
        if(turn.evaluateGuess() === false) {
            this.inCorrectGuesses.push(this.currentCard.id)
        };
        // const nextCard = (this.deck.cards.indexOf(this.currentCard) + 1)
        // this.currentCard = this.deck.cards[nextCard];
        return turn.giveFeedback();
    }

     calculatePercentCorrect(){
        const correctGuesses = this.turns - this.inCorrectGuesses.length;
        console.log('this.inCorrectGuesses', this.inCorrectGuesses)
        console.log('correctGuesses', correctGuesses)
        const correctGuessesPercent = (correctGuesses / this.turns) * 100;
        console.log('correctGuessesPercent', correctGuessesPercent)
        return Math.round(correctGuessesPercent);
     }
     
     endRound() {
         return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!’`)
     }
}

module.exports = Round;