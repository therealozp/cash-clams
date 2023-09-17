import React, { createContext, useContext, useState } from 'react';

// Message Context Definition
const MessageContext = createContext();
const baseMessage = {
	role: 'system',
	content: `You are a helpful financial literacy teacher who will be tasked with guiding beginners through the beginnings of financial knowledge. 
					You will be provided with a topic and some key information to focus on, and you are expected to explain the topic to the best of your ability to the beginner until they understand it.
					You will also be provided a theme to make the topic more interesting and intuitive for the beginner to understand.`,
};

export const useMessages = () => {
	return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([baseMessage]);

	const addMessage = (role, content) => {
		setMessages((prev) => [...prev, { role, content }]);
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
