// Generate lessons and save them, and based on the lessons generate a quiz, and once they move on to the next moduel clear the data
// For quizes, they can retake quizes -> no criteria to proceed, and incorrect answers are saved and
//displayed differently with more emphasis during the next iteration of the quiz
import { lessonsList } from './constants';

const prompt = (lessonNumber, theme) => {
	const message = `I am a beginner in financial literacy. Please teach me about ${
		lessonsList[lessonNumber - 1].name
	} in terms of ${theme}. Please make it relevant to the theme or the character of the theme, but make it educational and practical for finance situations. 
	
	Hint: please focus on the following topics: ${
		lessonsList[lessonNumber - 1].lessons
	}
	`;
	return message;
};

export default prompt;
