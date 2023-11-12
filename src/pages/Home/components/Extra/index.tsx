import { useExtra } from './hooks/useExtra';

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ExtraCard } from './components/ExtraCard';

export function Extra(): JSX.Element {
	const { extras, animations } = useExtra();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Heading
				as={motion.h2}
				{...animations.heading}
			>
				Extra! Extra!
			</Heading>
			<Text
				as={motion.p}
				{...animations.text}
			>
				It's not over yet. I still have things to show that can be very
				interesting, take a look.
			</Text>
			<Flex
				direction='column'
				pt='2rem'
				gap='2rem'
			>
				{extras.map((item, index) => (
					<ExtraCard
						item={item}
						variant={index % 2 === 0 ? 'imgRight' : 'imgLeft'}
						key={item.title}
					/>
				))}
			</Flex>
		</Container>
	);
}
