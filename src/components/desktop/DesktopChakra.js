'use client'
import React from 'react';
import { Text, Box, Flex, Image, Heading } from '@chakra-ui/react';
import '../../../styles/desktopstyle.css';
import { lessonsList } from '@/utils/constants';
import Module from './Module';
import "../../../styles/desktopstyle.css";
import Sidebar from "../../components/sidebar/sidebar";
import Link from 'next/link';
// import { Box } from "@chakra-ui/react";

const DesktopChakra = () => {
	return (
		// <Box
		// 	maxHeight="93vh"
		// 	overflowY="scroll"
		// 	padding="32px"
		// 	margin="8px"
		// 	backgroundColor={'#FFFFFF'}
		// 	borderRadius={'20px'}
		// 	boxShadow={'md'}
		// >
		// 	<Heading mb="16px">Modules</Heading>
		// 	<Text color="#979CA5">
		// 		Welcome back! Your progress is about to be amazing! Keep at it!
		// 	</Text>
		// 	<Flex>
		// 		<Box
		// 			height={'300px'}
		// 			width={'400px'}
		// 			backgroundColor={'#7AB743'}
		// 			margin="32px"
		// 			borderRadius={'20px'}
		// 			boxShadow="lg"
		// 		></Box>
		// 		<Box
		// 			height={'300px'}
		// 			width={'400px'}
		// 			backgroundColor={'#FFFFFF'}
		// 			margin="32px"
		// 			borderRadius={'20px'}
		// 			boxShadow="lg"
		// 		></Box>
		// 	</Flex>
		// 	<Box>
		// 		{lessonsList.map((lesson, i) => {
		// 			return (
		// 				<Module
		// 					name={lesson.name}
		// 					moduleID={lesson.moduleCode}
		// 					key={`module${i}`}
		// 				/>
		// 			);
		// 		})}
		// 	</Box>
		// </Box>

    <div className="desktop">
      <div className="div">
        <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/sHJwGhwy/img/rectangle-1.svg" />
        <img className="img" alt="Rectangle" src="https://c.animaapp.com/sHJwGhwy/img/rectangle-2.svg" />
        <div className="rectangle-2" />
        <div className="mesh" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Not Started</div>
        <div className="ellipse-2" />
        <div className="text-2">{""}</div>

        <div className="text-wrapper-9">Modules</div>
        <p className="welcome-back-bella">
          <span className="span">Welcome back!</span>
          <span className="span">! Your progress is about to be amazing! Keep at it</span>
        </p>
      
        <div className="text-wrapper-11">0%</div>
        <div className="text-wrapper-15">0.0 AVERAGE SCORE</div>
        <p className="p">Better than 0% of students</p>
        <Link href='/learn/modules/1'><div className="text-wrapper-16">Introduction to Financial Literacy</div></Link>

        <img
          className="more-vertical"
          alt="More vertical"
          src="https://c.animaapp.com/sHJwGhwy/img/more-vertical-3.svg"
        />
        <img
          className="more-vertical-2"
          alt="More vertical"
          src="https://c.animaapp.com/sHJwGhwy/img/more-vertical-4.svg"
        />
        <div className="text-wrapper-21">Entry</div>
        
        <div className="text-wrapper-22">Featured Modules</div>
        <div className="group-2">
          <img className="vector" alt="Vector" src="https://c.animaapp.com/sHJwGhwy/img/vector-4.svg" />
          <div className="text-wrapper-23">View all</div>
        </div>
        <div className="text-wrapper-24">Modules Name</div>
        <div className="text-wrapper-25">Start</div>
        <div className="text-wrapper-26">Rate</div>
        <div className="text-wrapper-27">Type</div>
        <div className="text-wrapper-28">Save</div>
		
        <Text position={'absolute'} zIndex={99} className="text-wrapper-29">Budgeting with Pokémon</Text>
        <Link href={'/learn/modules/4'} passHref><p className="text-wrapper-30">Saving and Investing in the Anime World</p></Link>
        <Link href={'/learn/modules/5'} passHref><p className="text-wrapper-31">Debt Management with Anime Characters</p></Link>
        <Link href={'/learn/modules/6'} passHref> <p className="text-wrapper-32">Building Credit Using Pokémon Principles</p></Link>
        <div className="rectangle-6">
          <img className="test" height={'100%'} width={'100%'} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F87%2Fdd%2F0d%2F87dd0d33d064abeebacb11dd87029b48.jpg&f=1&nofb=1&ipt=2e2845bee566d40d5287110b0f0d7e42cbb8e567a4dafd551e0b502105a94378&ipo=images"></img>
        </div>
        <div className="rectangle-7" >
			<img height={'2%'} width={'100%'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2Ffa10%2Ff%2F2017%2F107%2F7%2F2%2Fgoku_dbs_by_xyelkiltrox-db647dj.png&f=1&nofb=1&ipt=e4ece487646aba368c420aac25695c536a1fde0e0fb152f99221823c1e50ad08&ipo=images' />
		</div>
        {/* <V className="v-25" /> */}
        <div className="rectangle-8">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpokemon%2Fpokemon_PNG111.png&f=1&nofb=1&ipt=30690d988f9c011ac227d2ee49d30d9a54d69f46a13caaf2c73e698a7862766d&ipo=images"></img>
        </div>
        <div className="text-wrapper-33">N/A</div>
        <div className="text-wrapper-34">N/A</div>
        <div className="text-wrapper-35">N/A</div>
        <div className="text-wrapper-36">N/A</div>
        <img className="star" alt="Star" src="https://c.animaapp.com/sHJwGhwy/img/star-1.svg" />
        <img className="star-2" alt="Star" src="https://c.animaapp.com/sHJwGhwy/img/star-1.svg" />
        <img className="star-3" alt="Star" src="https://c.animaapp.com/sHJwGhwy/img/star-1.svg" />
        <img className="star-4" alt="Star" src="https://c.animaapp.com/sHJwGhwy/img/star-1.svg" />
        <div className="text-wrapper-37">4.8</div>
        <div className="text-wrapper-38">4.6</div>
        <div className="text-wrapper-39">4.5</div>
        <div className="text-wrapper-40">4.8</div>
        <div className="rectangle-9" />
        <div className="rectangle-10" />
        <div className="rectangle-11" />
        <div className="rectangle-12" />
        <div className="text-wrapper-41">BUDGET</div>
        <div className="text-wrapper-42">INVESTMENT</div>
        <div className="text-wrapper-43">MANAGEMENT</div>
        <div className="text-wrapper-44">CREDIT SCORE</div>
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/sHJwGhwy/img/vector-3.svg" />
        <img className="vector-3" alt="Vector" src="https://c.animaapp.com/sHJwGhwy/img/vector-3.svg" />
        <img className="vector-4" alt="Vector" src="https://c.animaapp.com/sHJwGhwy/img/vector-3.svg" />
        <img className="vector-5" alt="Vector" src="https://c.animaapp.com/sHJwGhwy/img/vector-3.svg" />
        <Box borderRadius={'25px'} objectFit={'contain'} className="rectangle-13" >
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa2%2F7e%2F04%2Fa27e04c2d6946ed9b8d71f0762b7b8e7.jpg&f=1&nofb=1&ipt=f671bb0ca20e3cc94f4b5aef2cb7b6b7914df883fd964eff9936eea131067bac&ipo=images"></img>
        </Box>
        {/* <V5 className="v-5" /> */}
        <img className="image-3" alt="Image" src="https://c.animaapp.com/sHJwGhwy/img/image-2@2x.png" />
      </div>
    </div>
	);
};

export default DesktopChakra;
