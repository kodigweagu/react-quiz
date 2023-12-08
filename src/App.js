import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
