import React from "react";
import bank from "../bank";
import Quiz from "./Quiz";
import { shuffle } from "../utils";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  const randomQuestions = shuffle(bank).slice(0, 10);
  return (
    <div>
      <ToastContainer />
      <Quiz randomQuestions={randomQuestions} />

    </div>
  );
};

export default App;
