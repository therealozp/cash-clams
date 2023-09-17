function QuizPage() {
	const quizPageText = 'Welcome to the Quiz!';

	const divElement = document.createElement('div');
	divElement.innerHTML = `
      <h1>${quizPageText}</h1>
      <button id="startQuizButton">Start Quiz</button>
    `;

	document.body.appendChild(divElement);

	const startQuizButton = document.getElementById('startQuizButton');
	startQuizButton.addEventListener('click', startQuiz);
}

function startQuiz() {
	const quizContainer = document.createElement('div');
	quizContainer.innerHTML = `
      <h2>Question 1:</h2>
      <p>What is the capital of France?</p>
      <ul>
        <li><button onclick="checkAnswer(true)">Paris</button></li>
        <li><button onclick="checkAnswer(false)">London</button></li>
        <li><button onclick="checkAnswer(false)">Berlin</button></li>
      </ul>
    `;

	document.body.innerHTML = ''; // Clear the existing content
	document.body.appendChild(quizContainer);
}

function checkAnswer(isCorrect) {
	if (isCorrect) {
		alert('Correct answer!');
	} else {
		alert('Wrong answer. Try again.');
	}
}
export default QuizPage;
