import { usePlacesWorked } from './hooks/usePlacesWorked';

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Place } from './components/Place';

export function PlacesWorked(): JSX.Element {
	const { places, animations } = usePlacesWorked();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Heading
				as={motion.h2}
				{...animations.heading}
			>
				Places I worked
			</Heading>
			<Text
				as={motion.p}
				{...animations.text}
			>
				I know, it is a humble curriculum, but I did had pretty good
				experiences.
			</Text>
			<Flex
				direction={'column'}
				pt='2rem'
				gap='2rem'
			>
				{places.map((item) => (
					<Place
						place={item}
						key={item.name}
					/>
				))}
			</Flex>
		</Container>
	);
}
