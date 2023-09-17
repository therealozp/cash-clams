import { useState } from 'react';

export default function QuizPage() {
	const [quizStarted, setQuizStarted] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(1);

	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	const handleCheckAnswer = (isCorrect) => {
		if (isCorrect) {
			alert('Correct answer!');
		} else {
			alert('Wrong answer. Try again.');
		}

		// Move to the next question (if needed)
		setQuestionNumber(questionNumber + 1);
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

	// Display the quiz question and answer options
	return (
		<div>
			<h2>Question {questionNumber}:</h2>
			<p>What is the capital of France?</p>
			<ul>
				<li>
					<button onClick={() => handleCheckAnswer(true)}>Paris</button>
				</li>
				<li>
					<button onClick={() => handleCheckAnswer(false)}>London</button>
				</li>
				<li>
					<button onClick={() => handleCheckAnswer(false)}>Berlin</button>
				</li>
			</ul>
		</div>
	);
}
