const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.currentRound = deck
        this.currentCard = deck.cards[0];
        this.turns = 0
        this.inCorrectGuesses = [];
        this.startTime = 0
    }

     returnCurrentCard() {
         return this.currentCard;
        //  if (!this.currentCard) {
            // return this.inCorrectGuesses
        }
     

     takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns++
        if (turn.evaluateGuess() === false) {
            this.inCorrectGuesses.push(this.currentCard.id)
        }
        const nextCard = (this.currentRound.cards.indexOf(this.currentCard) + 1)
        this.currentCard = this.currentRound.cards[nextCard];
        return turn.giveFeedback();
    }

    startTimer () {
        this.startTime = Date.now()
    }

    displayTime() {
        let time = Date.now() - this.startTime
        let seconds = (time / 1000) % 60;
        let minutes = Math.floor((time / 1000) / 60);
        seconds < 10 ? `${minutes}:0${seconds.toFixed(2)}` : `${minutes}:${seconds.toFixed(2)}`
      }

     calculatePercentCorrect (){
        const correctGuesses = this.turns - this.inCorrectGuesses.length;
        const correctGuessesPercent = (correctGuesses / this.turns) * 100;
        return Math.round(correctGuessesPercent);
     }
     
     endRound () {
         let time = this.displayTime()
         return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${time} minutes!’`) 
     }
}

module.exports = Round;