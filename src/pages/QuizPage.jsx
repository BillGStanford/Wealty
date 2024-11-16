import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sampleQuizzes, quizTypes } from '../data/quiz';

// QuizList Component
const QuizList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Quizzes - Our Days Media</title>
        <meta name="description" content="Take our fun and educational quizzes!" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8">Quizzes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(sampleQuizzes).map(([key, quiz]) => (
          <Link key={key} to={`/quiz/${key}`}>  {/* Use the object key instead of quiz.id */}
            <div className="bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
                <p className="text-gray-600 mb-4">
                  {quiz.type === 'scored' ? 'Test your knowledge!' : 'Discover yourself!'}
                </p>
                <div className="text-sm text-gray-500">
                  {quiz.questions.length} questions
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Quiz Component
const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  
  console.log('Available quizzes:', Object.keys(sampleQuizzes)); // Debug log
  console.log('Attempting to access quiz with ID:', quizId); // Debug log
  
  const quiz = sampleQuizzes[quizId];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!quiz) {
    console.log('Quiz not found:', quizId);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md w-full max-w-lg mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Quiz Not Found</h2>
          <p className="mb-4 text-gray-600">The quiz "{quizId}" could not be found.</p>
          <button 
            onClick={() => navigate('/quizzes')}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const handleAnswer = (optionId) => {
    setAnswers({ ...answers, [currentQuestion]: optionId });
  };

  const calculateResult = () => {
    if (quiz.type === quizTypes.CATEGORICAL) {
      const scores = {};
      Object.entries(answers).forEach(([questionIndex, answerId]) => {
        const question = quiz.questions[parseInt(questionIndex)];
        const selectedOption = question.options.find(opt => opt.id === answerId);
        scores[selectedOption.score] = (scores[selectedOption.score] || 0) + 1;
      });
      
      const result = Object.entries(scores).reduce((a, b) => 
        scores[a] > scores[b] ? a : b
      )[0];
      
      return quiz.results[result];
    } else {
      const score = Object.entries(answers).reduce((total, [questionIndex, answerId]) => {
        const question = quiz.questions[parseInt(questionIndex)];
        const selectedOption = question.options.find(opt => opt.id === answerId);
        return total + selectedOption.score;
      }, 0);
      
      return quiz.getResult(score, quiz.questions.length);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalResult = calculateResult();
      setResult(finalResult);
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{quiz.title} - Our Days Media</title>
        <meta name="description" content={`Take the ${quiz.title} quiz!`} />
      </Helmet>

      {showResult ? (
        <div className="bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{quiz.title} - Result</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="text-xl font-semibold text-center py-8">{result}</div>
            <div className="flex gap-4">
              <button 
                onClick={restart}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Take Quiz Again
              </button>
              <button 
                onClick={() => navigate('/quizzes')}
                className="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Back to Quizzes
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </div>
            <div className="text-lg font-medium">
              {quiz.questions[currentQuestion]?.text}
            </div>
            
            <div className="space-y-3">
              {quiz.questions[currentQuestion]?.options.map((option) => (
                <label 
                  key={option.id} 
                  className="flex items-center space-x-3 p-3 rounded border cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option.id}
                    checked={answers[currentQuestion] === option.id}
                    onChange={() => handleAnswer(option.id)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className={`w-full px-4 py-2 rounded transition-colors ${
                  answers[currentQuestion]
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === quiz.questions.length - 1 ? 'Show Result' : 'Next Question'}
              </button>
              <button 
                onClick={() => navigate('/quizzes')}
                className="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export both components
export { QuizList as QuizzesPage, Quiz as QuizPage };