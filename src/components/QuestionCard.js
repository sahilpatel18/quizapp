import React, { useState } from "react";

import "../css/styles.css";

const QuestionCard = ({
  question,
  shuffledAnswers,
  score,
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

  const onClickNext = () => {
    const finalAnswer = item[item.length - 1];
    if (finalAnswer === correct_answers.toString()) {
      setScore((score) => score + 1);
      setCount((count) => count + 1);
    } else {
      setUserQuestion((userQuestion) => [...userQuestion, question]);
      setUserAnswer((userAnswer) => [...userAnswer, finalAnswer]);
      console.log(userAnswer);

      setCount((count) => count + 1);
    }
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
            The correct answer is <strong></strong>
              </div>
            ))}
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
                className='bg-white hover:bg-blue-200 disabled p-4 text-green-800 font-semibold rounded shadow mb-3'
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => onClickNext()}
                className='bg-white hover:bg-blue-200 p-4 text-green-800 font-semibold rounded shadow mb-3'
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
