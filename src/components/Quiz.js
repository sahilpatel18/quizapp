import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { shuffle } from "../utils";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

const Quiz = ({ randomQuestions }) => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);

    const userScore = useSelector(state => state.userScore)
    const dispatch = useDispatch()

  const randomQuestion = randomQuestions[count - 1];
  const possibleAnswers = shuffle([...randomQuestion.all_answers]);

  return (
    <div>
      <ToastContainer />
      <QuestionCard
        question={randomQuestion}
        possibleAnswers={possibleAnswers}
        score={score}
        dispatch={dispatch}
        userScore={userScore}
        setScore={setScore}
        count={count}
        setCount={setCount}
        totalQuestions={randomQuestions.length || 10}
      />
    </div>
  );
};

export default Quiz;
