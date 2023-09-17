import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import ButtonInfo from '../buttonInfo.js';
import { SlLayers } from 'react-icons/sl';
import { CgNotes } from 'react-icons/cg';
import {
	AiOutlineSchedule,
	AiOutlineSetting,
	AiOutlineHome,
} from 'react-icons/Ai';
import { GoHistory } from 'react-icons/Go';
const SidebarElement = ({ module }) => {
	return (
		<Box
			id="SideNav"
			class="sidenav"
			backgroundColor={'#7AB743'}
			padding="16px"
			// border="1px solid black"
		>
			<Text>{module}</Text>
		</Box>
	);
};

const modules = [
	{ name: 'Home', icon: AiOutlineHome },
	{ name: 'Modules', icon: SlLayers },
	{ name: 'Notes', icon: CgNotes },
	{ name: 'Schedule', icon: AiOutlineSchedule },
	{ name: 'History', icon: GoHistory },
	{ name: 'Settings', icon: AiOutlineSetting },
];

const Sidebar = () => {
	return (
		<Box
			height="100vh"
			w="200px"
			borderRightRadius="20px"
			padding="8px"
			backgroundColor={'#FFFFFF'}
			boxShadow={`2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042)`}
		>
			<Box margin="24px 0">
				<Text fontSize="xl" fontWeight="bold" textAlign="center" mb="8px">
					💸 Cash Clams
				</Text>
			</Box>
			<Box alignItems="center">
				{modules.map((module, i) => (
					<ButtonInfo
						text={module.name}
						icon={module.icon}
						key={i}
						color="#8A8A8A"
					/>
				))}
			</Box>
		</Box>
	);
};

export default Sidebar;
