import React, { useState, useEffect } from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=15&category=17&type=multiple";

const QuestionCard = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const Button = ({ answer }) => {
    return (
      <button className='bg-white p-4 text-purple-800 mb-4 rounded shadow font-semibold'>
        {answer}
      </button>
    );
  };

  return questions.length > 0 ? (
    <div className='container'>
      <div className='bg-white text-purple-800 p-8 rounded-lg shadow-md'>
        <h2
          className='text-2xl'
          dangerouslySetInnerHTML={{ __html: questions[0].question }}
        />
      </div>
      <div className='grid cols-2 gap-6 mt-4 '>
        <Button answer={questions[0].correct_answer} />
        <Button answer={questions[0].incorrect_answers[0]} />
        <Button answer={questions[0].incorrect_answers[1]} />
        <Button answer={questions[0].incorrect_answers[2]} />
      </div>
    </div>
  ) : (
    <h2 className='text-2xl text-white font-bold'>Loading...</h2>
  );
};

export default QuestionCard;
