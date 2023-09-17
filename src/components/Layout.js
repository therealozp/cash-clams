import React from 'react';
import { Flex, Box, Text, Button, Icon, Grid } from '@chakra-ui/react';
import Sidebar from './welcome/Sidebar';

const Layout = ({ children }) => {
	return (
		<Box height="100vh" width="100vw">
			<Grid gridTemplateColumns="1fr 6fr">
				<Sidebar />
				<Box width="100%" height="100%" padding="16px">
					{children}
				</Box>
			</Grid>
		</Box>
	);
};

export default Layout;
