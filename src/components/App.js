import React, { useState } from "react";
import bank from "../bank";
import QuestionCard from "./QuestionCard";
import { shuffle } from "../utils";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const tenRandomQuestions = bank.splice(
    Math.floor(Math.random() * bank.length),
    9
  );

  const randomQuestion = tenRandomQuestions[Math.floor(Math.random() * tenRandomQuestions.length)];

  const allAnswers = randomQuestion.all_answers;
  const shuffledAnswers = shuffle(allAnswers);

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);

  return (
    <div>
      <ToastContainer />
      <QuestionCard
        question={randomQuestion}
        shuffledAnswers={shuffledAnswers}
        score={score}
        setScore={setScore}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default App;
