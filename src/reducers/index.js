import userScoreReducer from "./userScoreReducer";
import currentQuestionReducer from "./currentQuestionReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userScore: userScoreReducer,
  currentQuestion: currentQuestionReducer,
});

export default allReducers;
