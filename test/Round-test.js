const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe ('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal',
          ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?',
          ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?',
          ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() { 
      expect(round).to.be.an.instanceof(Round);
    });

    it('should be able to store a new deck', function() {
      expect(deck.cards.length).to.deep.equal(3);
    });

    it('should be able start playing the first card', function() { 
      round.returnCurrentCard();
      expect(round.currentCard).to.equal(card1);
    });

    it('should be able to respond with a message', function() {
      round.takeTurn('pug');
      round.takeTurn('gallbladder');
      round.takeTurn('Fitzgerald');
      round.returnCurrentCard();
      round.endRound();
      expect(round.endRound()).to.be.a.string(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
    });
})