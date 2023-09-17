import React, { createContext, useContext, useState } from 'react';

// Message Context Definition
const MessageContext = createContext();
const baseMessage = {
	role: 'system',
	content: `You are a helpful financial literacy teacher who will be tasked with guiding beginners through the beginnings of financial knowledge. You will be provided with a topic and some key information to focus on, and you are expected to explain the topic to the best of your ability to the beginner until they understand it. Your response should look something like a short lecture, and NOT as a reply to a question, so do not start your responses with reply words like "Sure!", or "Okay!", or "Certainly!". You will also be provided a theme to make the topic more interesting and intuitive for the beginner to understand. Make your lectures specific to the theme by incorporating certain elements or characters of said theme, but not too specific such that it becomes irrelevant to Financial Literacy.`,
};

export const useMessages = () => {
	return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([baseMessage]);

	const addMessage = (role, content) => {
		setMessages([...messages, { role, content }]);
	};

	const resetMessages = () => {
		setMessages([baseMessage]);
	};

	return (
		<MessageContext.Provider value={{ messages, addMessage, resetMessages }}>
			{children}
		</MessageContext.Provider>
	);
};
