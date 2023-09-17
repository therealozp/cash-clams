'use client';

import { useState } from 'react';
import { useMessages } from '@/context/MessagesContext';
import { useTheme } from '@/context/ThemeContext';
import {
	Flex,
	Box,
	Text,
	Button,
	Icon,
	Grid,
	VStack,
	Heading,
	List,
	ListItem,
} from '@chakra-ui/react';
import promptQuiz from '@/utils/getQuizData';
import parseJSONfromString from '@/utils/parseJSON';
import QuizOption from './QuizOption';
import QuizCompleteScreen from './QuizCompletedScreen';
import { useRouter } from 'next/navigation';

const Wrapper = ({ children }) => {
	return (
		<Box
			maxHeight="93vh"
			overflowY="scroll"
			padding="32px"
			margin="8px"
			backgroundColor={'#FFFFFF'}
			borderRadius={'20px'}
			boxShadow="md"
			height={'100%'}
		>
			{children}
		</Box>
	);
};

const PreQuizScreen = ({ getQuestions, loading, quizData, startQuiz }) => {
	return (
		<Wrapper>
			<Heading>Welcome to the Quiz!</Heading>
			<Text fontSize="xl" mb={4}>
				You will be asked a series of questions to test your knowledge of the
				material. Best of luck!
			</Text>
			<Button
				colorScheme="teal"
				onClick={quizData ? startQuiz : getQuestions}
				isLoading={loading}
			>
				{quizData ? "Let's go!" : 'Generate Questions!'}
			</Button>
		</Wrapper>
	);
};

export default function QuizPage({ moduleID }) {
	const [quizData, setQuizData] = useState(null);
	const [loading, setLoading] = useState(false);
	const { messages } = useMessages();
	const { theme } = useTheme();
	const router = useRouter();
	const getQuestions = async () => {
		setLoading(true);
		const quizPrompt = promptQuiz(moduleID, theme);
		const newMessages = [...messages, { role: 'user', content: quizPrompt }];
		const res = await fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				messages: newMessages,
			}),
		});
		const data = await res.json();
		const content = data.body.text;
		console.log(content);
		const parsedData = parseJSONfromString(content);
		console.log(parsedData.questions.length);
		setQuizData(parsedData);
		setLoading(false);
	};

	const [quizStarted, setQuizStarted] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [answered, setAnswered] = useState(false);
	const [quizFinished, setQuizFinished] = useState(false);

	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	const handleCheckAnswer = (selectedAnswerIndex) => {
		setAnswered(true);
		const currentQuestion = quizData.questions[currentQuestionIndex];
		if (currentQuestion.correct_answer === selectedAnswerIndex + 1) {
			// Increment score if the answer is correct
			setScore(score + 1);
		}
	};

	const moveToNext = () => {
		// Move to the next question (if available)
		if (
			quizData?.questions &&
			currentQuestionIndex < quizData?.questions.length - 1
		) {
			setAnswered(false);
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setQuizFinished(true);
		}
	};

	const goToNextModule = () => {
		const newID = parseInt(moduleID) + 1;
		router.push(`/learn/modules/${newID}`);
	};
	if (!quizStarted) {
		return (
			<PreQuizScreen
				getQuestions={getQuestions}
				loading={loading}
				quizData={quizData}
				startQuiz={handleStartQuiz}
			/>
		);
	}

	// Display the current question and answer options
	const currentQuestion = quizData?.questions[currentQuestionIndex];

	return (
		<Wrapper>
			{quizFinished ? (
				<>
					<QuizCompleteScreen
						score={score}
						totalQuestions={quizData.questions.length}
						onNextModule={() => goToNextModule()}
						currentModuleID={moduleID}
					/>
				</>
			) : (
				<>
					<Heading size="lg" mb="16px">
						Question {currentQuestion.number}:
					</Heading>
					<Text fontSize="xl">{currentQuestion.question}</Text>
					<VStack spacing={5} mt="10%">
						<List spacing={3}>
							{currentQuestion.answers.map((answer, index) => (
								<ListItem key={index}>
									<QuizOption
										colorScheme="green"
										width="100%"
										height="100px"
										onClick={() => handleCheckAnswer(index)}
										answered={answered}
										isCorrect={currentQuestion.correct_answer === index + 1}
									>
										{answer}
									</QuizOption>
								</ListItem>
							))}
						</List>
					</VStack>
					<Flex width="100%" justifyContent={'flex-end'}>
						{answered && <Button onClick={moveToNext}>Next</Button>}{' '}
					</Flex>
				</>
			)}
		</Wrapper>
	);
}
