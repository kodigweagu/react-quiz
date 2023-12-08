import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Answer = () => {
  const [state] = useContext(QuizContext);
  var currentQuestion = state.questions[state.index];
  return (
    <div className="answer">
      <div className="answer-letter">A</div>
      <div className="answer-text">Text of answer</div>
    </div>
  );
};

export default Answer;
