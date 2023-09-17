import React from 'react';
import { Text, Box, Flex, Image} from '@chakra-ui/react';
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
			w="270px"
            position='fixed'
			borderRightRadius="20px"
			padding="8px"
			backgroundColor={'#FFFFFF'}
			boxShadow={'md'}
		>

         <>
         <Flex pt={'10px'} mb={'50px'} justifyContent={'center'} alignItems='center' gap='3px'>
            <Image boxSize={'10'} className="image" alt="Image" src="https://c.animaapp.com/FUAPC6qq/img/image-1@2x.png" />
            <Text fontSize='18px' fontWeight='400' whiteSpace='nowrap' letterSpacing='0' lineHeight='normal' fontFamily={'Helvetica, Inter'} fontWeight={'bold'} className="text-wrapper-7">Cash Clam</Text>
          </Flex>
			<Flex flexDir={'column'} alignItems="center">
				{modules.map((module, i) => (
					<ButtonInfo
						text={module.name}
						icon={module.icon}
						key={i}
						color="#8A8A8A"
                        mb='20px'
                        width='70%'
					/>
				))}
			</Flex>
         </>
		</Box>
	);
};

export default Sidebar;
