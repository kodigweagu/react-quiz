import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [state, dispatch] = useContext(QuizContext);
  const dataURL = "https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple&encode=url3986";
  useEffect(() => {
    if(state.questions.length === 0){
      fetch(dataURL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: 'load', payload: data.results})
      });
    }
  });
  var score = state.score.reduce(function(a, b) { return a + b; }, 0);
  console.log('state', state.currentAnswer.length, state.questions.length)
  const disabledClass = state.currentAnswer.length === state.questions.length ? '' : 'disabled-answer';
  return (
    <div className="quiz">
      { state.showResults &&
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>You've got {score} out of {state.questions.length}</div>
            <div className="next-button" onClick={() => dispatch({type: 'restart'})}>restart</div>
          </div>
        </div>
      }
      { !state.showResults && state.questions.length > 0 && 
        <div>
          <div className="score">Question {state.index + 1}/{state.questions.length}</div>
          <Question />
          {
            state.index === ( state.questions.length - 1 ) &&
            <div className={`next-button ${disabledClass}`} onClick={() => dispatch({type: 'submit'})}>Submit</div>
          }
          {
            state.index < ( state.questions.length - 1 ) &&
            <div className="next-button" onClick={() => dispatch({type: 'next'})}>Next</div>
          }
          {
            state.index > 0 &&
            <div className="next-button" onClick={() => dispatch({type: 'previous'})}>Previous</div>
          }
        </div>
      }
    </div>
  );
};

export default Quiz;
