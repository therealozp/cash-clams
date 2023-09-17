'use client';
import { Box, Flex, Text, Button, Icon, Grid } from '@chakra-ui/react';

const MainPage = () => {
	return (
		<Box height="100vh" width="100vw">
			<Grid gridTemplateColumns="2fr 5fr">
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				></Flex>
				<Flex></Flex>
			</Grid>
		</Box>
	);
};
