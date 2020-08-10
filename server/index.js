require("./models/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const quizRoute = require("./routes/index");

app.use(cors());

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

app.use("/", quizRoute);
