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
        {state.answers.map((answer, index) => (
          <Answer answer={answer} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Question;
