const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sahil123:abc41801@quizappcluster.27keh.mongodb.net/quizapp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDb connection Succeeded");
    } else {
      console.log("Error in DB connection :" + err);
    }
  }
);

require("./question.model");
