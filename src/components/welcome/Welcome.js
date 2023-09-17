'use client';

import Image from 'next/image';
import humanSpace from '../../../public/human.png';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import Layout from '../Layout';

const Welcome = () => {
	return (
		<Layout>
			<Flex
				px={5}
				py={5}
				borderRadius="xl"
				backgroundColor="#7AB743"
				color="white"
				alignItems="center"
				height={'150px'}
				overflow={'hidden'}
				maxWidth={'1000px'}
			>
				<Flex flexDirection="column">
					<Heading>Welcome back! 👋</Heading>
					<Text>
						You’ve learned <strong>70%</strong> of your goal this week! Keep it
						up and improve your progeress.
					</Text>
				</Flex>

				<Image alt="human" size="xs" src={humanSpace}></Image>
			</Flex>
		</Layout>
	);
};

export default Welcome;
