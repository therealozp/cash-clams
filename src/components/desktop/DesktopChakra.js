import React from 'react';
import { Text, Box, Flex, Image, Heading } from '@chakra-ui/react';
import '../../../styles/desktopstyle.css';
import { lessonsList } from '@/utils/constants';
import Module from './Module';

const DesktopChakra = () => {
	return (
		<Box
			maxHeight="93vh"
			overflowY="scroll"
			padding="32px"
			margin="8px"
			backgroundColor={'#FFFFFF'}
			borderRadius={'20px'}
			boxShadow={'md'}
		>
			<Heading mb="16px">Modules</Heading>
			<Text color="#979CA5">
				Welcome back! Your progress is about to be amazing! Keep at it!
			</Text>
			<Flex>
				<Box
					height={'300px'}
					width={'400px'}
					backgroundColor={'#7AB743'}
					margin="32px"
					borderRadius={'20px'}
					boxShadow="lg"
				></Box>
				<Box
					height={'300px'}
					width={'400px'}
					backgroundColor={'#FFFFFF'}
					margin="32px"
					borderRadius={'20px'}
					boxShadow="lg"
				></Box>
			</Flex>
			<Box>
				{lessonsList.map((lesson, i) => {
					return (
						<Module
							name={lesson.name}
							moduleID={lesson.moduleCode}
							key={`module${i}`}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

export default DesktopChakra;
