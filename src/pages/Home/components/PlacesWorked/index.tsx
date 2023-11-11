import { usePlacesWorked } from './hooks/usePlacesWorked';

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Place } from './components/Place';

export function PlacesWorked(): JSX.Element {
	const { places } = usePlacesWorked();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Heading as='h2'>Places I worked</Heading>
			<Text>
				I know, it is a humble curriculum, but I did had pretty good
				experiences.
			</Text>
			<Flex
				direction={'column'}
				pt='2rem'
				gap='2rem'
			>
				{places.map((item) => (
					<Place place={item} />
				))}
			</Flex>
		</Container>
	);
}
