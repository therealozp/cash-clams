import { Flex, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Buttoninfo({ text, icon, flexContent, link, ...props }) {
	return (
		<>
			{/* {!flexContent && <Divider />} */}
			<Button
				colorScheme="gray"
				backgroundColor="transparent"
				padding="16px"
				width="full"
				as={Link}
				href={link}
				{...props}
			>
				<Flex
					alignItems="center"
					width="100%"
					justifyContent={flexContent ? 'center' : 'flex-start'}
				>
					<Box as={icon} boxSize={6} marginRight={2} />
					<Box>{text}</Box>
				</Flex>
			</Button>
		</>
	);
}
