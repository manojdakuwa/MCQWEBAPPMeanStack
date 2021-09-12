const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a QuizSchema
const QuizSchema = new Schema({
    name:String,
    correctMarks:Number,
    answer: [],


});

// Define and Export Model
const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;