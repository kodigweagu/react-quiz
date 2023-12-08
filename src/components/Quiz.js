import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [state, click] = useContext(QuizContext);

  return (
    <div className="quiz">
      { !state.showResults &&
        <div>
          <div className="score">Question {state.index + 1}/{state.questions.length}</div>
          {!state.showResults && <Question /> } 
          {
            state.index > 0 &&
            <div className="next-button" onClick={() => click({type: 'previous'})}>Previous</div>
          }
          {
            state.index < ( state.questions.length - 1 ) &&
            <div className="next-button" onClick={() => click({type: 'next'})} style={{marginTop: '50px'}}>Next</div>
          }
          {
            state.index === ( state.questions.length - 1 ) &&
            <div className="next-button" onClick={() => click({type: 'submit'})} style={{marginTop: '50px'}}>Submit</div>
          }
        </div>
      }
    </div>
  );
};

export default Quiz;
