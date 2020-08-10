import React from "react";
import QuestionCard from "./QuestionCard";
import { shuffle } from "../utils";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

const Quiz = ({ randomQuestions }) => {
  const { currentQuestion, userScore } = useSelector((state) => state);

  const dispatch = useDispatch();
  const randomQuestion =
    randomQuestions && randomQuestions[currentQuestion - 1];

  const possibleAnswers =
    randomQuestion &&
    randomQuestion.all_answers &&
    shuffle([...randomQuestion.all_answers]);

  return (
    <div>
      <ToastContainer />
      <QuestionCard
        question={randomQuestion}
        possibleAnswers={possibleAnswers}
        dispatch={dispatch}
        currentQuestion={currentQuestion}
        userScore={userScore}
        totalQuestions={randomQuestions.length || 10}
      />
    </div>
  );
};

export default Quiz;
