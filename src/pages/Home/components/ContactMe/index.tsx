import { useContactMe } from './hooks/useContactMe';

import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { SiGmail, SiLinkedin, SiTelegram } from 'react-icons/si';

export function ContactMe(): JSX.Element {
	const { animations } = useContactMe();

	return (
		<Container
			as='section'
			color='yellow.yellow9contrast'
		>
			<Heading
				as={motion.h2}
				color='yellow.yellow9contrast'
				{...animations.heading}
			>
				Now, it's your time. Contact me.
			</Heading>
			<Text
				as={motion.p}
				{...animations.text}
			>
				No, really. Do it. Now!
			</Text>
			<Flex
				as={motion.div}
				maxW='fit-content'
				mt='2rem'
				mx='auto'
				direction={'column'}
				align={'center'}
				gap='1rem'
				{...animations.text}
			>
				<Flex
					as={Link}
					isExternal
					href='mailto:nathancaio1715@gmail.com?subject=Portfolio%20-%20Contact'
					w='100%'
					gap={['0.5rem', '1rem', '2rem']}
					align={'center'}
					fontSize='2rem'
					color='yellow.yellow9contrast'
				>
					<SiGmail />
					<Text fontSize='xl'>nathancaio1715@gmail.com</Text>
				</Flex>
				<Flex
					as={Link}
					isExternal
					href='https://www.linkedin.com/in/nathan-caio-da-silva-38b769186/'
					w='100%'
					gap={['0.5rem', '1rem', '2rem']}
					align={'center'}
					fontSize='2rem'
					color='yellow.yellow9contrast'
				>
					<SiLinkedin />
					<Text fontSize='xl'>Nathan Caio da Silva</Text>
				</Flex>
				<Flex
					as={Link}
					isExternal
					href='https://t.me/nc0ds'
					w='100%'
					gap={['0.5rem', '1rem', '2rem']}
					align={'center'}
					fontSize='2rem'
					color='yellow.yellow9contrast'
				>
					<SiTelegram />
					<Text fontSize='xl'>@nc0ds</Text>
				</Flex>
			</Flex>
			<Text
				as={motion.p}
				mt='2rem'
				{...animations.text}
			>
				Hey, thank you so much for your attention. This is it, you know a little
				bit of me now, please feel free to contact me if you got interested, I
				would be more than happy to know what you think and what we can do
				together. Thank you so much.
			</Text>
		</Container>
	);
}
