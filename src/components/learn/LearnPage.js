'use client';

import { useRef, useState } from 'react';
import {
	Flex,
	Box,
	Text,
	Button,
	FormControl,
	Heading,
} from '@chakra-ui/react';
import Layout from '../Layout';
import { useMessages } from '@/context/MessagesContext';
import { useTheme } from '@/context/ThemeContext';
import prompt from '@/utils/getTopics';
import { lessonsList } from '@/utils/constants';
import { useRouter } from 'next/navigation';

const ThemeWarning = ({ theme, onChange, submit, loading }) => {
	return (
		<Box mt="30px">
			<Text fontSize={'3xl'}>
				It looks like you haven&apos;t set a theme yet...
			</Text>
			<Text margin="16px 0">
				Hit the &quot;Setting&quot; button on the sidebar to get started!
			</Text>
		</Box>
	);
};

const Ready = ({ submit, loading }) => {
	return (
		<Box mt="30px">
			<Text fontSize={'3xl'}>
				{loading ? 'Working our magic...(your wifi is a lil slow 💀)' : 'Ready to learn?'}
			</Text>

			<FormControl isRequired >
				<Button
					colorScheme="green"
					onClick={submit}
					isLoading={loading}
					margin="16px 0"
				>
					Let&apos;s go!
				</Button>
			</FormControl>
		</Box>
	);
};

const LearnPage = ({ moduleID }) => {
	const { messages, addMessage, resetMessages } = useMessages();
	const { theme } = useTheme();
	const containerRef = useRef(null);
	const [response, setResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const submit = async () => {
		const themePrompt = prompt(moduleID, theme);
		const newMessages = [...messages, { role: 'user', content: themePrompt }];
		setLoading(true);
		console.log('Messages after prompt: ', newMessages);
		addMessage('user', themePrompt);

		const res = await fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				messages: newMessages,
			}),
		});

		setLoading(false);
		const data = await res.json();
		const content = data.body.text;
		addMessage('assistant', content);
		console.log(content);
		containerRef.current.innerText = content;
		setResponse(content);
	};
	return (
		<Layout>
			<Flex
				width="100%"
				height="100%"
				padding="16px"
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
			>
				<Heading marginBottom="32px">
					Module {moduleID}: {lessonsList[moduleID - 1].name}
				</Heading>

				{response ? null : theme ? (
					<Ready submit={submit} loading={loading} />
				) : (
					<ThemeWarning />
				)}
				<>
					<Box
						ref={containerRef}
						width="65%"
						maxHeight="100%"
						overflowY={'scroll'}
						visibility={response ? 'visible' : 'hidden'}
					></Box>
					{response ? (
						<Button p='5px' onClick={() => router.push(`/quiz/modules/${moduleID}`)}>
							Test your skills
						</Button>
					) : null}
				</>
			</Flex>
		</Layout>
	);
};

export default LearnPage;
