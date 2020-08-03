import React, { useState } from "react";

import "../css/styles.css";
import { toast } from "react-toastify";

const customId = "adiendnvaskd";

const QuestionCard = ({
  question,
  shuffledAnswers,
  score = 0,
  setScore,
  count,
  setCount,
}) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [userQuestion, setUserQuestion] = useState([]);
  const [item, setItem] = useState([]);
  const { correct_answers } = question;

  const onHandleAnswerClick = (ans) => {
    setItem((item) => [...item, ans]);
  };
  
  const notify = () => {
    toast.error("Please select an answer", {
      toastId: customId,
    });
  };

  const dismiss = () => toast.dismiss(customId.current);

  const onClickNext = () => {
    const finalAnswer = item[item.length - 1];
    if (finalAnswer === correct_answers.toString()) {
      dismiss();
      setScore((score) => score + 1);
      setCount((count) => count + 1);
      setItem([]);
    } else if (finalAnswer === undefined) {
      notify();
    } else {
      dismiss();
      setUserQuestion((userQuestion) => [...userQuestion, question]);
      setUserAnswer((userAnswer) => [...userAnswer, finalAnswer]);
      setCount((count) => count + 1);
      setItem([]);
    }
  };

  const handleStartOver = () => {
    setScore(0);
    setCount(1);
    setUserQuestion([]);
    setUserAnswer([]);
    setItem([]);
  };

  return question.question.length > 0 ? (
    <div className='container'>
      {score > 4 || count > 5 ? (
        <>
          {score > 4 ? (
            <h1>
              CONGRATULATIONS! YOU ANSWERED ALL OF THE QUESTIONS CORRECTLY
            </h1>
          ) : (
            <div>
              <h1>You Answered {score}/5 Questions Correctly! </h1>
              <br />
              <h1>HERE ARE THE QUESTIONS YOU MISSED!</h1>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "70vh",
            }}
          >
            {userQuestion.map((question, idx) => (
              <div>
                <div
                  style={{ position: "sticky" }}
                  className='bg-white text-green-900 px-32 font-semibold rounded '
                  dangerouslySetInnerHTML={{ __html: question.question }}
                />
                You chose <strong>{userAnswer[idx]}</strong>
                <br />
                The correct answer is{" "}
                <strong>{question.correct_answers}</strong>
              </div>
            ))}
            <button
              onClick={() => handleStartOver()}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            >
              Start Over
            </button>
          </div>
        </>
      ) : (
        <>
          <span>Score:{score}</span>
          <br />
          <span>Question: {count}</span>
          <div className='bg-white w-full text-green-900 p-8 rounded-lg shadow-md'>
            <h2
              className='text-2xl'
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
          </div>
          <div className='grid grid-cols-2 gap-6 mt-6'>
            {shuffledAnswers.map((answer) => (
              <button
                className='bg-white w-full hover:bg-blue-200  p-4  text-green-800 font-semibold rounded shadow mb-3'
                onClick={() => onHandleAnswerClick(answer)}
              >
                {answer}
              </button>
            ))}
            <br />
          </div>
          <div className='inline-flex'>
            {count === 5 ? (
              <button
                onClick={() => onClickNext()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => onClickNext()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    <h2 className='text-2xl text-white font-bold'>Loading...</h2>
  );
};

export default QuestionCard;
