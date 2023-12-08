import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [state, click] = useContext(QuizContext);

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {state.index}/8</div>
        <Question />
        <div className="next-button" onClick={() => click({type: 'next'})}>Next</div>
        <div className="next-button" onClick={() => click({type: 'previous'})} style={{marginTop: '50px'}}>Previous</div>
      </div>
    </div>
  );
};

export default Quiz;
