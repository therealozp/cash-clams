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

const modules = [
	{ name: 'Home', icon: AiOutlineHome, link:'dashboard' },
	{ name: 'Modules', icon: SlLayers, link:'desktop' },
	{ name: 'Notes', icon: CgNotes, link:'' },
	{ name: 'Schedule', icon: AiOutlineSchedule, link:''  },
	{ name: 'History', icon: GoHistory, link:''  },
	{ name: 'Settings', icon: AiOutlineSetting, link:''      },
];

export default function Sidebar() {
	return (
		<Box
			height="100vh"
            zIndex={999}
			w="270px"
            position='fixed'
			borderRightRadius="20px"
			padding="8px"
			backgroundColor={'#FFFFFF'}
			boxShadow={'md'}
		>

         <>
         <Flex pt={'10px'} ml={'-15px'} mb={'50px'} justifyContent={'center'} alignItems='center' gap='3px'>
            <Image boxSize={'10'} className="image" alt="Image" src="https://c.animaapp.com/FUAPC6qq/img/image-1@2x.png" />
            <Text fontSize='18px' fontWeight='400' whiteSpace='nowrap' letterSpacing='0' lineHeight='normal' fontFamily={'Helvetica, Inter'} fontWeight={'bold'}>Cash Clam</Text>
          </Flex>
			<Flex flexDir={'column'} alignItems="center">
				{modules.map((module, i) => (
					<ButtonInfo
						text={module.name}
						icon={module.icon}
						key={i}
                        link={module.link}
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
