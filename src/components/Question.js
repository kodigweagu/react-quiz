import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [state, click] = useContext(QuizContext);
  var currentQuestion = state.questions[state.index];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {state.answers.map((answer, index) => (
          <Answer 
            key={index}
            index={index}
            answer={answer}
            correctAnswer = {currentQuestion.correctAnswer}
            currentAnswer = {state.currentAnswer[state.index]}
            onSelectAnswer={ (answerText) => click({type: 'select', selectedAnswer: answerText, correctAnswer: currentQuestion.correctAnswer })}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
