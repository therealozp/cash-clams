import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const QuizOption = ({ children, onClick, isCorrect, answered }) => {
	return (
		<Button
			colorScheme={answered ? (isCorrect ? 'green' : 'red') : 'green'}
			onClick={onClick}
			disabled={answered}
			backgroundColor={
				answered ? (isCorrect ? 'green.500' : 'red.500') : 'green.500'
			}
			width="500px"
			height="100px"
		>
			{children}
		</Button>
	);
};

export default QuizOption;
