'use client';

import { useRef, useState } from 'react';
import {
	Flex,
	Input,
	Box,
	Text,
	Button,
	Icon,
	Grid,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import Layout from '../Layout';
import { useMessages } from '@/context/MessagesContext';
import prompt from '@/utils/getTopics';

const LearnPage = () => {
	const { messages, addMessage, resetMessages } = useMessages();
	const containerRef = useRef(null);
	const [theme, setTheme] = useState('');
	const [response, setResponse] = useState('');
	const [loading, setLoading] = useState(false);

	const ThemeInput = () => {
		return (
			<Box>
				<Text>
					Hello there 👋 To start, customize your experience by entering a theme
					you&apos;d like this to be about!
				</Text>
				<FormControl isRequired>
					<FormLabel>Your Theme</FormLabel>
					<Input
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						placeholder="Pokemon"
					/>
					<Button onClick={submit} isLoading={loading}>
						Submit
					</Button>
				</FormControl>
			</Box>
		);
	};

	const submit = async () => {
		const themePrompt = prompt(1, theme);
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
		containerRef.current.innerHTML = content;
	};
	return (
		<Layout>
			<Flex width="100%" height="100%" padding="16px" containerRef>
				{response ? <ThemeInput /> : null}
				<Box
					ref={containerRef}
					width="80%"
					maxHeight="100%"
					overflow={'scroll'}
					visibility={response ? 'visible' : 'hidden'}
				></Box>
			</Flex>
		</Layout>
	);
};

export default LearnPage;
