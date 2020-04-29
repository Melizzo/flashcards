const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;
    
    beforeEach(() => {
        deck = new Deck([card1, card2, card3]);
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    })
    
    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Card', function() {
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should store multiple cards', function() {
        deck.countCards();
        expect(deck.cards.length).to.equal(3);
        expect (deck.cards).to.deep.equal([card1, card2, card3]);
    });  

})