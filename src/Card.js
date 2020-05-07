class Card {
    constructor(id, question, answers = ['answer1', 'answer2', 'answer3'], correctAnswer) {
        this.id = id,
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
    }
}

module.exports = Card;