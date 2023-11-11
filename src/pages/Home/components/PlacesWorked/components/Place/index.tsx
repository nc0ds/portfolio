import { Flex, Heading, Text, Link } from '@chakra-ui/react';

type PlaceProps = {
	place: {
		name: string;
		description: string;
		url: string;
		dates: {
			from: string;
			to: string;
		};
	};
};

export function Place({
	place: { name, description, url, dates },
}: PlaceProps): JSX.Element {
	return (
		<Flex
			as={Link}
			isExternal
			href={url}
			direction='column'
			justify='center'
			pl='0.5rem'
			color='sand.sand12'
			borderLeftWidth={'0.3rem'}
			borderLeftColor='yellow.yellow9'
			transition='0.2s ease-in-out'
			_hover={{
				'& > p': {
					opacity: 1,
					maxH: '1.5rem',
				},
			}}
		>
			<Heading
				as='h3'
				color='sand.sand12'
				fontSize='3xl'
			>
				{name} ({dates.from} - {dates.to})
			</Heading>
			<Text
				maxH='0'
				opacity={0}
				transition='0.2s ease-in-out'
			>
				<Text
					as='strong'
					color='yellow.yellow9'
				>
					Description:{' '}
				</Text>
				{description}
			</Text>
		</Flex>
	);
}
