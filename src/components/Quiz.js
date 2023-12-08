import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [state, click] = useContext(QuizContext);

  return (
    <div className="quiz">
      { state.showResults &&
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>You've got 4 out of {state.questions.length}</div>
            <div className="next-button" onClick={() => click({type: 'restart'})}>restart</div>
          </div>
        </div>
      }
      { !state.showResults &&
        <div>
          <div className="score">Question {state.index + 1}/{state.questions.length}</div>
          <Question />
          {
            state.index === ( state.questions.length - 1 ) &&
            <div className="next-button" onClick={() => click({type: 'submit'})}>Submit</div>
          }
          {
            state.index < ( state.questions.length - 1 ) &&
            <div className="next-button" onClick={() => click({type: 'next'})}>Next</div>
          }
          {
            state.index > 0 &&
            <div className="next-button" onClick={() => click({type: 'previous'})}>Previous</div>
          }
        </div>
      }
    </div>
  );
};

export default Quiz;
