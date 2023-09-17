import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const ModuleCard = ({ title, caption, link }) => {
	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			padding="4"
			boxShadow="xl"
		>
			<Heading size="md" mb="2">
				{title}
			</Heading>
			<Text fontSize="sm" color="gray.600">
				{caption}
			</Text>
		</Box>
	);
};

export default ModuleCard;
