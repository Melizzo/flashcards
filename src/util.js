const inquirer = require('inquirer');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

const genList = (round) => {
  let card = round.returnCurrentCard();
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard() && round.calculatePercentCorrect() <= 90) {
      console.log(`!!~~~~~~~**Please try again and get over 90% to pass this amazing quiz**~~~~~~~~~~~~~~~~~~!!`)
      const cards = prototypeQuestions.map(quizQuestion => {
        const card = new Card (quizQuestion.id, quizQuestion.question, quizQuestion.answers, quizQuestion.correctAnswer)    
        return card
      })
      const deck = new Deck(cards);
      round = new Round(deck);
      round.startTimer()
    } 
    if(!round.returnCurrentCard()) {
      round.endRound();
    }
    else {
      main(round);
    }
}

module.exports.main = main;