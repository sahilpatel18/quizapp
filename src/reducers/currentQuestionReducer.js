const currentQuestionReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_QUESTIONS":
      return state + 1;
    case "RESTART_QUESTIONS":
      return (state = 1);
    default:
      return state;
  }
};

export default currentQuestionReducer