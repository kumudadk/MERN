import React, { useState } from "react";
import questions from "./QuestionData";

function QuizApp() {
  const [currentQuestion, setcurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerOption = (userSelectedOption) => {
    if (userSelectedOption) {
      setScore((prevScore) => prevScore + 1);
    }

    //moving to the next question

    const nextQuestion = currentQuestion + 1; //nextQuestion = 1
    if (nextQuestion < questions.length) {
      // 1<2
      setcurrentQuestion(nextQuestion); //currentQuestion = 1
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="container">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="container">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
          {/* Question 1 / 2 */}
          <div>{questions[currentQuestion].questionText}</div>
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOption(option.isCorrect)}
            >
              {option.answerText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizApp;
