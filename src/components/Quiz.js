import { useReducer } from "react";
import Question from "./Question";

const initialState = {
  index : 0,
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
  var result = 0;
  if (state.index > 0)
    result = state.index - 1;
    return result;  
}

const Quiz = () => {
  const [state, click] = useReducer(reducer, initialState);

  const nextQuestion = () => {
    click({type: 'next'});
  }

  const prevQuestion = () => {
    click({type: 'previous'});
  }

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {state.index}/8</div>
        <Question />
        <div className="next-button" onClick={nextQuestion}>Next</div>
        <div className="next-button" onClick={prevQuestion} style={{marginTop: '50px'}}>Previous</div>
      </div>
    </div>
  );
};

export default Quiz;
