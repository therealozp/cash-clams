import { lessonsList } from './constants';

const promptQuiz = (lessonNumber, theme) => {
	const message = `Please give me 10 quiz questions, each with 4 options, and one correct option, based on the topic "${
		lessonsList[lessonNumber - 1].name
	}" in terms of ${theme} and make sure they are closely relevant to Financial Literacy. Hint: the learner has only just learned the following topics: ${
		lessonsList[lessonNumber - 1].lessons
	}
Do NOT give me a reply of anything apart the quiz data. Please format your response in JSON so that its contents are strictly as a following format: 
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
    ]
	`;
	return message;
};

export default promptQuiz;
