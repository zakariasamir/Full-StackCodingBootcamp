const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({ question: triviaQuestions[currentQuestionIndex].question });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (!userAnswer) {
    return res.status(400).json({ message: "Please provide an answer." });
  }

  let correct = false;
  if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    correct = true;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      correct,
      message: correct ? "Correct answer!" : `Wrong! The correct answer was: ${currentQuestion.answer}`,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  } else {
    res.json({
      correct,
      message: correct ? "Correct answer!" : `Wrong! The correct answer was: ${currentQuestion.answer}`,
      info: "Quiz complete. Visit /quiz/score to see your score."
    });
  }
});


router.get('/score', (req, res) => {
  res.json({
    message: `You scored ${score} out of ${triviaQuestions.length}!`
  });
});

module.exports = router;
