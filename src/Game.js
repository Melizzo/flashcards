const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = {};
  }

  startGame() {
    const cards = prototypeQuestions.map(quizQuestion => {
      const card = new Card (quizQuestion.id, quizQuestion.question, quizQuestion.answers, quizQuestion.correctAnswer)    
      return card
    })

    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.currentRound.startTimer();
    this.printMessage(deck, round);
    this.printQuestion(round);
  } 

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} awesome cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;