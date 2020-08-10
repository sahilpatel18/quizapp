import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Quiz from "./Quiz";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const response = await axios(`/api/questions`);
    setQuestions(response.data);
  };

  useEffect(getQuestions, []);

  return (
    <div>
      <ToastContainer />
      <Quiz randomQuestions={questions} />
    </div>
  );
};

export default App;
