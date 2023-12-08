import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [state] = useContext(QuizContext);
  var currentQuestion = state.questions[state.index];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
