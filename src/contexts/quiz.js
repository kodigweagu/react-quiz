import { createContext, useReducer } from "react";

const initialState = {
  index : 1,
  questions : [],
};

const reducer = (state, action) => {
  console.log(action.type);
  var result;
  switch(action.type) {
    case 'previous':
      result = previous(state);
      break;
    default:
      result = next(state);
  }
  return {
    index : result,
    questions : [],
  };
};

const next = (state) => {
  var result = 8;
  if (state.index < 8)
    result = state.index + 1;
  return result;
}

const previous = (state) => {
  var result = 1;
  if (state.index > 1)
    result = state.index - 1;
    return result;  
}

export const QuizContext = createContext();

export const QuizProvider = props => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
};