'use client';

import React, { useState } from 'react';
import { Flex, Box, Grid } from '@chakra-ui/react';
import Sidebar, { SidebarPlaceholder } from './sidebar/sidebar';
import ThemeModal from './userTheme/ThemeModal';

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	return (
		<Box maxHeight="100vh" width="100vw">
			<Grid gridTemplateColumns="1fr 6fr">
				<Sidebar onOpen={onOpen} />
				<SidebarPlaceholder />
				<Box width="100%" height="100%" padding="16px" maxHeight={'100vh'}>
					{children}
				</Box>
			</Grid>
			<ThemeModal isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Layout;
