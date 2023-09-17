'use client';

import { useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Box,
	Text,
} from '@chakra-ui/react';
import ThemeInput from './ThemePicker';
import { useTheme } from '@/context/ThemeContext';

const ThemeModal = ({ isOpen, onClose }) => {
	const [themeInput, setThemeInput] = useState('');
	const [loading, setLoading] = useState(false);
	const { theme, setTheme, clearTheme } = useTheme();

	const onChange = (e) => setThemeInput(e.target.value);

	const submit = () => {
		// localStorage.setItem('theme', theme);
		setTheme(themeInput);
		onClose();
	};

	const clear = () => {
		clearTheme();
		onClose();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Choose a Theme</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{theme ? (
							<Box>
								<Text>Current theme: {theme}</Text>
							</Box>
						) : (
							<ThemeInput
								theme={themeInput}
								onChange={onChange}
								submit={submit}
								loading={loading}
							/>
						)}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							onClick={theme ? clear : submit}
							isLoading={loading}
							margin="16px 0"
						>
							{theme ? 'Clear Theme' : 'Choose Theme'}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ThemeModal;
