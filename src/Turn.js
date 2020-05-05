class Turn {
    constructor(guess, currentCard) {
        this.guess = guess;
        this.currentCard = currentCard;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess() {
        console.log('this.currentCard', this.currentCard);
        console.log('guess', this.guess)
        return this.guess === this.currentCard.correctAnswer ? true : false
    }

    giveFeedback() {
        return this.evaluateGuess() ? 'Good Job, that is correct!' :
        'Incorrect!'
    }

}module.exports = Turn;