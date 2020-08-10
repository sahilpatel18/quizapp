const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    difficulty: String,
    question: String,
    correct_answers: [String],
    all_answers: [String],
})

const Question = mongoose.model('question',QuestionSchema)

module.exports = Question