const Answer = props => {
  const letterMapping = ['A','B','C','D'];
  const isCorrectAnswer = props.currentAnswer && props.answer === props.correctAnswer;
  const isWrongAnswer = props.currentAnswer === props.answer && props.currentAnswer !== props.correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
  const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
  const disabledClass = props.currentAnswer ? 'disabled-answer' : '';
  return (
    <div 
    className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
    onClick={() => props.onSelectAnswer(props.answer)}
    >
      <div className="answer-letter">{letterMapping[props.index]}</div>
      <div className="answer-text">{props.answer}</div>
    </div>
  );
};

export default Answer;
