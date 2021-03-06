import { useTechnologies } from './hooks/useTechnologies';

import { Container, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { TechIcon } from './components/TechIcon';

export function Technologies(): JSX.Element {
	const { icons, animations } = useTechnologies();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Heading
				as={motion.h2}
				{...animations.heading}
			>
				Ok, and what technologies I know?
			</Heading>
			<Text
				as={motion.p}
				{...animations.text}
			>
				Let me show you some of the techs I know. The cool part is that it
				doesn't stop there.
			</Text>
			<SimpleGrid
				as={motion.div}
				mt='2rem'
				columns={3}
				justifyItems='center'
				gap='2rem'
				{...animations.iconsContainer}
			>
				{icons.map((item) => (
					<TechIcon
						icon={item.icon}
						title={item.title}
						key={item.title}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
}
