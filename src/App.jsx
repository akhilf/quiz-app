import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import questions from "./constants/questions.json";
import Question from "./compoents/questions.jsx";
import Result from "./compoents/result.jsx";

function App() {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestions(currentQuestions + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  }
  const resetQuiz = () => {
    setCurrentQuestions(0);
    setUserAnswers([]);
  }
  return (
    <>
      <div className='App'>
        <h1>Hello quiz</h1>
        {currentQuestions < questions.length && (
        <Question
          question={questions[currentQuestions]}
          onAnswerClick={handleNextQuestion}
        />
       )}
        {(currentQuestions === questions.length &&
           <Result userAnswers={userAnswers}
           questions={questions}
           resetQuiz={resetQuiz} />
        )}
      </div>
    </>
  )
}

export default App
