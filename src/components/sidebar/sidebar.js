import React from 'react';
import { Text, Box, Flex, Image, Heading } from '@chakra-ui/react';
import ButtonInfo from '../buttonInfo.js';
import { SlLayers } from 'react-icons/sl';
import { CgNotes } from 'react-icons/cg';
import {
	AiOutlineSchedule,
	AiOutlineSetting,
	AiOutlineHome,
} from 'react-icons/Ai';
import { GoHistory } from 'react-icons/Go';
import Link from 'next/link';

const modules = [
	{ name: 'Home', icon: AiOutlineHome, href: '/' },
	{ name: 'Modules', icon: SlLayers, href: '/learn' },
	{ name: 'Notes', icon: CgNotes, href: '/' },
	{ name: 'Schedule', icon: AiOutlineSchedule, href: '/' },
	{ name: 'History', icon: GoHistory, href: '/' },
	{ name: 'Settings', icon: AiOutlineSetting, href: '/' },
];

const SidebarPlaceholder = () => {
	return (
		<Flex
			height="100vh"
			width="270px"
			borderRightRadius="20px"
			padding="8px"
			boxShadow={'md'}
		>
			<></>
		</Flex>
	);
};

const Sidebar = ({ onOpen }) => {
	return (
		<Box
			height="100vh"
			w="270px"
			position="fixed"
			borderRightRadius="20px"
			padding="8px"
			backgroundColor={'#FFFFFF'}
			boxShadow={'md'}
		>
			<>
				<Flex
					pt={'10px'}
					mb={'50px'}
					justifyContent={'center'}
					alignItems="center"
					gap="3px"
					marginTop="16px"
				>
					<Image
						boxSize={'10'}
						className="image"
						alt="Image"
						src="https://c.animaapp.com/FUAPC6qq/img/image-1@2x.png"
					/>
					<Heading fontSize="30px" whiteSpace="nowrap" letterSpacing="0">
						Cash Clam
					</Heading>
				</Flex>
				<Flex flexDir={'column'} alignItems="center">
					{modules.map((module, i) =>
						module.name == 'Settings' ? (
							<ButtonInfo
								text={module.name}
								icon={module.icon}
								key={i}
								color="#8A8A8A"
								mb="20px"
								width="70%"
								onClick={onOpen}
							/>
						) : (
							<Link key={i} href={`${module.href}`} style={{ width: '70%' }}>
								<ButtonInfo
									text={module.name}
									icon={module.icon}
									key={i}
									color="#8A8A8A"
									mb="20px"
								/>
							</Link>
						)
					)}
				</Flex>
			</>
		</Box>
	);
};

export default Sidebar;
export { SidebarPlaceholder };
