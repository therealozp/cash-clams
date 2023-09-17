'use client';

import { Flex, Text, Button, Heading } from '@chakra-ui/react';

function QuizCompleteScreen({ score, totalQuestions, onNextModule }) {
	// Calculate percentage score
	const percentage = (score / totalQuestions) * 100;

	let feedback;
	if (percentage >= 80) {
		feedback = 'Great job! You have a strong grasp on the topic.';
	} else if (percentage >= 60) {
		feedback = 'Good work. You might want to review some areas.';
	} else {
		feedback =
			'Consider revisiting the material to strengthen your understanding. Remember, a strong foundation in finance is key to success!';
	}

	return (
		<Flex direction="column" align="center" justify="center" height="70vh">
			<Heading mb={4}>Quiz Completed!</Heading>
			<Text fontSize="xl" mb={4}>
				Your score: {score}/{totalQuestions}
			</Text>
			<Text mb={6}>{feedback}</Text>
			<Flex>
				<Button
					colorScheme="green"
					margin="0 20px"
					onClick={() => window.location.reload()}
				>
					Retry
				</Button>
				<Button colorScheme="green" onClick={onNextModule} margin="0 20px">
					Go Next
				</Button>
			</Flex>
		</Flex>
	);
}

export default QuizCompleteScreen;
