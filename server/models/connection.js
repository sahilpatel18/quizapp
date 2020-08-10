const mongoose = require('mongoose')
// const Question = require('./question.model')


mongoose.connect('mongodb+srv://sahil123:abc41801@quizappcluster.27keh.mongodb.net/quizapp?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log('MongoDb connection Succeeded')}
    else {console.log('Error in DB connection :' + err)}
})

require('./question.model')


// const data = {
//     difficulty: "hard",
//     question: "What five letter word is the motto of the IBM Computer company?",
//     correct_answers: ["Think"],
//     all_answers: ["Click", "Logic", "Pixel", "Think"],
// }

// const newQuestion = new Question(data)

// newQuestion.save((error) => {
//     if(error){
//         console.log('ERROR ERROR ERROR');
//     } else {
//         console.log('DATA HAS BEEN SAVED');
//     }
// })