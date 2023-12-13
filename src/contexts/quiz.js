import { createContext, useReducer } from "react";
import questions from "../data"
import { shuffleAnswers } from "../helpers";

const initialState = {
  showResults : false,
  index : 0,
  answers : shuffleAnswers(questions[0]),
  questions,
  currentAnswer: [],
  score: [],
};

const reducer = (state, action) => {
  var result = {...state};
  switch(action.type) {
    case 'next':
      next(result);
      break;
    case 'previous':
      previous(result);
      break;
    case 'submit':
      showResults(result);
      break;
    case 'restart':
      initialState.currentAnswer = [];
      initialState.score = [];
      return initialState;
    case 'select':
      select(result, action.selectedAnswer, action.correctAnswer);
      return result;
    default:
      return state;
  }
  result.answers = shuffleAnswers(questions[result.index]);
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
const select = (state, selectedAnswer, correctAnswer) => {
  state.currentAnswer[state.index] = selectedAnswer;
  state.score[state.index] = selectedAnswer === correctAnswer ? 1 : 0;
}

export const QuizContext = createContext();

export const QuizProvider = props => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
};