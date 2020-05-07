
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card;
    let card1;
    let guess;
    let turn;
    let turn1;

    beforeEach(() => {
        turn = new Turn(guess, card),
        card1 = new Card(1, 'What is Robbie\'s favorite animal',
        ['sea otter', 'pug', 'capybara'], 'sea otter');
        turn1 = new Turn('pug', card1)
    });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('have a name to represent the current guess', function() {
    expect(turn1.guess).to.equal('pug');
  }); 

  it('should have a card object for the current card played', function() {
    expect(turn1.currentCard).to.be.an.instanceof(Card);
  });  

  it('should be able to return a guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.guess);
  });  

  it('should be able to return the current Card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should be able to return false for an incorrect guess', function() { 
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should be able to state Incorrect!', function() { 
    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('Incorrect!');
  });

});