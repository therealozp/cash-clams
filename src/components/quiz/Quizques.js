'use client';
import { useState } from 'react';

// Sample quiz data
const quizData = {
	module: {
		number: 1,
		name: 'Mathematics',
		questions: 30,
		revision: '2017-08-13',
	},
	questions: [
		{
			number: 1,
			question: 'Eighteen thousandths, written as a decimal, is:',
			answers: ['0.0018', '0.018', '0.18'],
			correct_answer: 1,
		},
		{
			number: 2,
			question: 'The next number in the sequence <b>1, 3, 6, 10, </b> is:',
			answers: ['12', '13', '14', '15'],
			correct_answer: 4,
		},
	],
};

export default function QuizPage() {
	const [quizStarted, setQuizStarted] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);

	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	const handleCheckAnswer = (selectedAnswerIndex) => {
		const currentQuestion = quizData.questions[currentQuestionIndex];
		if (currentQuestion.correct_answer === selectedAnswerIndex + 1) {
			// Increment score if the answer is correct
			setScore(score + 1);
		}

		// Move to the next question (if available)
		if (currentQuestionIndex < quizData.questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			// Quiz is over; display score or a completion message
			alert(
				`Quiz completed! Your score: ${score}/${quizData.questions.length}`
			);
			// You can reset the quiz or navigate to another page here.
		}
	};

	if (!quizStarted) {
		// Display the initial quiz page with the "Start Quiz" button
		return (
			<div>
				<h1>Welcome to the Quiz!</h1>
				<button onClick={handleStartQuiz}>Start Quiz</button>
			</div>
		);
	}

	// Display the current question and answer options
	const currentQuestion = quizData.questions[currentQuestionIndex];

	return (
		<div>
			<h2>Question {currentQuestion.number}:</h2>
			<p>{currentQuestion.question}</p>
			<ul>
				{currentQuestion.answers.map((answer, index) => (
					<li key={index}>
						<button onClick={() => handleCheckAnswer(index)}>{answer}</button>
					</li>
				))}
			</ul>
		</div>
	);
}
