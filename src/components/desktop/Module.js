import React from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Module = ({ name, moduleID }) => {
	return (
		<Link href={`/learn/modules/${moduleID}`} passHref>
			<Box
				height="100px"
				width={'70%'}
				p="16px"
				border="2px solid #013220"
				margin="32px 0"
				borderRadius={'12px'}
				textDecor={'none'}
			>
				<Flex height="100%" w="100%" alignItems={'center'} fontWeight={'600'}>
					<Text fontSize={'xl'} mr="20px">
						{name}
					</Text>
					<Text>{moduleID}</Text>
				</Flex>
			</Box>
		</Link>
	);
};

export default Module;
