import { createContext, useReducer } from "react";
import questions from "../data"

const initialState = {
  showResults : false,
  index : 0,
  questions,
};

const reducer = (state, action) => {
  var result = {...state};
  switch(action.type) {
    case 'previous':
      previous(result);
      break;
    case 'submit':
      showResults(result);
      break;
    default:
      next(result);
  }
  return result;
};

const next = (state) => {
  if (state.index < state.questions.length - 1)
    state.index += 1;
}

const previous = (state) => {
  if (state.index > 0)
    state.index -= 1;
}
const showResults = (state) => {
  state.showResults = true;
}

export const QuizContext = createContext();

export const QuizProvider = props => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
};