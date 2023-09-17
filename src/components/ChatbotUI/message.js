'use client';

import React from 'react';
import styles from './chat.module.css';

const Message = ({ text, isUser }) => {
	return (
		<div
			className={`${styles.message} ${
				isUser ? styles.userMessage : styles.botMessage
			}`}
		>
			{text}
		</div>
	);
};

export default Message;
