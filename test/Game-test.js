const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Game', function() {
    let round
  it('should welcome you', function () {
    const round = new Round()
    expect(round.endRound()).to.be.a.string(`Welcome to FlashCards! You are playing with ${deck.countCards()} awesome cards.
    -----------------------------------------------------------------------`);
  })

})