// import and renders from window
'use client';

import React from 'react';
import ChatWindow from '../components/ChatWindow';
import styles from './chat.module.css';

const Home = () => {
	return (
		<div>
			<h1>ChatGPT Clone</h1>
			<ChatWindow />
		</div>
	);
};

export default Home;
