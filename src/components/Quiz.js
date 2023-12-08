import { useReducer } from "react";
import Question from "./Question";

const initialState = {
  index : 0,
  questions : [],
};

const reducer = (state, action) => {
  var result = 8
  if (state.index < 8)
    result = state.index + 1
  return {
    index : result,
    questions : [],
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const testClick = () => {
    console.log('click')
    dispatch({type: 'NEXT_QUESTION'});
  }

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {state.index}/8</div>
        <Question />
        <div className="next-button" onClick={testClick}>Next question</div>
      </div>
    </div>
  );
};

export default Quiz;
