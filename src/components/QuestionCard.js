import React, { useState } from "react";
import { Button } from "../Button";
import "../css/styles.css";
import { toast } from "react-toastify";
import { Header } from "./Header";

const QuestionCard = ({
  question,
  possibleAnswers,
  score = 0,
  setScore,
  count,
  setCount,
  totalQuestions,
}) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [userQuestion, setUserQuestion] = useState([]);
  const [item, setItem] = useState([]);
  const { correct_answers } = question;
  const [pressed, setPressed] = useState(false)

  const onHandleAnswerClick = (ans) => {
    setItem((item) => [...item, ans]);
  };

  const customId = "adiendnvaskd";
  const notify = () => {
    toast.error("Please select an answer", {
      toastId: customId,
    });
  };
  const dismiss = () => toast.dismiss(customId.current);



  const onClickSubmit = () => {
    setPressed(true)
    const finalAnswer = item[item.length - 1];
    if (finalAnswer === correct_answers.toString()) {
      dismiss();
      setScore((score) => score + 1);
      setItem([]);
    } else if (finalAnswer === undefined) {
      notify();
    } else {
      dismiss();
      setUserQuestion((userQuestion) => [...userQuestion, question]);
      setUserAnswer((userAnswer) => [...userAnswer, finalAnswer]);
      setItem([]);
    }
  }



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
    setPressed(false)
    setUserQuestion([]);
    setUserAnswer([]);
    setItem([]);
  };

  return totalQuestions > 0 ? (
    <div className='container'>
      {pressed === true ? (
        <>
          {score > totalQuestions - 1 ? (
            <h1 className='text-4xl underline'>
              CONGRATULATIONS! YOU ANSWERED ALL OF THE QUESTIONS CORRECTLY
              <br />
            </h1>
          ) : (
            <div style={{ position: "relative" }}>
              <h1 className='text-center text-4xl underline p-4 bg-white text-green-900'>
                You Answered {score}/10 Questions Correctly!{" "}
              </h1>
              <br />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "70vh",
              position: "relative",
            }}
          >
            {userQuestion.map((question, idx) => (
              <div style={{ position: "relative" }}>
                <div
                  className='bg-white text-center text-green-900 px-32 font-semibold rounded '
                  dangerouslySetInnerHTML={{ __html: question.question }}
                />
                <span>
                  <h2 className='text-center'>
                    You chose <strong>{userAnswer[idx]}</strong>
                  </h2>
                </span>
                <br />
                <span>
                  <h2 className='text-center'>
                    The correct answer is{" "}
                    <strong>{question.correct_answers}</strong>
                  </h2>
                </span>
              </div>
            ))}
            <Button
              onClick={() => handleStartOver()}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              name='Start Over'
            />
          </div>
        </>
      ) : (
        <>
          <Header count={count} />
          <br />
          <div className='bg-white w-full text-green-900 p-8 rounded-lg shadow-md'>
            <h2
              className='text-2xl'
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
          </div>
          <div className='grid grid-cols-2 gap-6 mt-6'>
            {possibleAnswers.map((answer) => {
              const pressedButton = [...item];
              const className =
                pressedButton.pop() === answer
                  ? `bg-blue-400 w-full hover:bg-blue-200 p-4 text-green-800 font-semibold rounded shadow mb-3`
                  : `bg-white w-full hover:bg-blue-200 p-4 text-green-800 font-semibold rounded shadow mb-3`;

              return (
                <input
                  type='button'
                  className={className}
                  value={answer}
                  onClick={() => onHandleAnswerClick(answer)}
                  key={answer}
                />
              );
            })}
            <br />
          </div>
          <div>
            {count === totalQuestions ? (
              <Button
                onClick={onClickSubmit}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                name='Submit'
              />
            ) : (
              <Button
                onClick={onClickNext}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                name='Next'
              />
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
