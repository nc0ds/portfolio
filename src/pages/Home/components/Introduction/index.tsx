import {
	Box,
	Center,
	VStack,
	Heading,
	Text,
	keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
	0% {
		background-size: 100%;
		background-position: center bottom;
	}
	50% {
		background-size: 120%;
		background-position: center bottom;
	}
	100% {
		background-size: 100%;
		background-position: center bottom;
	}
`;

const animation = `${animationKeyframes} 5s ease-in-out infinite`;

export function Introduction(): JSX.Element {
	return (
		<Box
			as={motion.div}
			minH={'100vh'}
			animation={animation}
			bgGradient='radial(circle at 50% 100%, yellow.yellowA7, transparent 70%)'
		>
			<Center
				as='main'
				minH='100vh'
			>
				<VStack>
					<Heading
						size={'4xl'}
						bgGradient='linear(to-b, yellow.yellowA9, yellow.yellowA12)'
						bgClip={'text'}
						fontWeight={'extrabold'}
						textAlign={'center'}
					>
						Welcome to my portfolio.
					</Heading>
					<Text align={'center'}>
						Relax and come see what I have to show you.
					</Text>
				</VStack>
			</Center>
		</Box>
	);
}
