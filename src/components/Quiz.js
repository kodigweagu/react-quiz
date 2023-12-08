import { useReducer } from "react";
import Question from "./Question";

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

const Quiz = () => {
  const [state, click] = useReducer(reducer, initialState);

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {state.index}/8</div>
        <Question questions={state.questions} name={'Kene'}/>
        <div className="next-button" onClick={() => click({type: 'next'})}>Next</div>
        <div className="next-button" onClick={() => click({type: 'previous'})} style={{marginTop: '50px'}}>Previous</div>
      </div>
    </div>
  );
};

export default Quiz;
