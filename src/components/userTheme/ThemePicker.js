import React from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Box,
	Text,
} from '@chakra-ui/react';

const ThemeInput = ({ theme, onChange, loading }) => {
	return (
		<Box marginTop="30px">
			<Text margin="16px 0">
				{loading
					? 'Wait a moment while I get things ready for you...'
					: "Hello there 👋 To start, customize your experience by entering a theme you'd like this to be about!"}
			</Text>
			<FormControl isRequired width="300px">
				<FormLabel>Your Theme</FormLabel>
				<Input value={theme} onChange={onChange} placeholder="Pokemon" />
			</FormControl>
		</Box>
	);
};

export default ThemeInput;
