import { useTechnologies } from './hooks/useTechnologies';
import { Container, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { TechIcon } from './components/TechIcon';

export function Technologies(): JSX.Element {
	const { icons } = useTechnologies();

	return (
		<Container
			as='section'
			maxW='6xl'
			pt='5rem'
		>
			<Heading
				as={motion.h2}
				position='relative'
				initial={{
					opacity: 0,
					top: '1rem',
				}}
				whileInView={{
					opacity: 1,
					top: 0,
				}}
			>
				Ok, but what technologies I know?
			</Heading>
			<Text
				as={motion.p}
				position='relative'
				initial={{
					opacity: 0,
					left: '-1rem',
				}}
				whileInView={{
					opacity: 1,
					left: 0,
				}}
			>
				Let me show you some of the techs I know. The cool part is that it
				doesn't stop there.
			</Text>
			<SimpleGrid
				mt='2rem'
				columns={3}
				justifyItems='center'
				gap='2rem'
			>
				{icons.map((item) => (
					<TechIcon
						icon={item.icon}
						title={item.title}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
}
