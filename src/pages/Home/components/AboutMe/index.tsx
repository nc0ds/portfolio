import { useAboutMe } from './hooks/useAboutMe';

import { Container, Flex, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export function AboutMe(): JSX.Element {
	const { animations } = useAboutMe();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Flex
				direction='column'
				gap='4rem'
			>
				<Box as='section'>
					<Heading
						as={motion.h2}
						{...animations.heading}
					>
						But hey, what's about me?
					</Heading>
					<Text
						as={motion.p}
						{...animations.text}
					>
						My name is Nathan Caio, I am from Brazil and I am a web developer.
						The coolest part, in my humble opinion, is that I am a pretty much
						of a <Text as='em'>self-taught</Text> developer, so yes, I know how
						to Google stuff.
					</Text>
				</Box>
				<Box as='section'>
					<Heading
						as={motion.h2}
						{...animations.heading}
					>
						And what do I do?
					</Heading>
					<Text
						as={motion.p}
						{...animations.text}
					>
						As I said, I am a web developer, but I have a focus on Front-End. My
						main stacks that I use to build web applications are React and
						Next.js. Say, doesn't that sound cool? Of course it does!
					</Text>
				</Box>
			</Flex>
		</Container>
	);
}
