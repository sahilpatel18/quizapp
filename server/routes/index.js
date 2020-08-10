const express = require("express");
const Questions = require("../models/question.model");
const router = express.Router();

router.get("/api/questions", (req, res) => {
  const { size = 5 } = req.query;
  Questions.aggregate([
    // { $match: { difficulty } },
    { $sample: { size: Number(size) } },
  ])
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/questions/:id", (req, res) => {
  Questions.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
