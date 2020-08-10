require("./models/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const quizRoute = require("./routes/index");

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

app.use("/api", quizRoute);
