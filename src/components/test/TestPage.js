'use client';

import { useState } from 'react';
import { useMessages } from '@/context/MessagesContext';
import { Button, Text, Input, FormControl, Box } from '@chakra-ui/react';
import prompt from '@/utils/getTopics';
const TestPage = () => {
	const { messages, addMessage, resetMessages } = useMessages();
	const [theme, setTheme] = useState('');
	const [response, setResponse] = useState('');
	const submit = async () => {
		const themePrompt = prompt(1, theme);
		const newMessages = [...messages, { role: 'user', content: themePrompt }];
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

		const data = await res.json();
		const content = data.body.text;
		addMessage('assistant', content);
		// console.log('Messages after response: ', [
		// 	...newMessages,
		// 	{ role: 'system', content: text },
		// ]);
		console.log(content);
		setResponse(content);
	};

	return (
		<Box>
			<Input value={theme} onChange={(e) => setTheme(e.target.value)} />
			<Button onClick={submit}>Submit</Button>
			<Text>{response}</Text>
		</Box>
	);
};

export default TestPage;
