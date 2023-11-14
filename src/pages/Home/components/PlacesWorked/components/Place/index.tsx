import { usePlace } from './hooks/usePlace';

import { Flex, Heading, Text, Link, LinkProps } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';

type MotionLinkProps = LinkProps & MotionProps & React.PropsWithChildren;

function MotionLink({ children, ...props }: MotionLinkProps) {
	return (
		<Link
			as={motion.a}
			{...props}
		>
			{children}
		</Link>
	);
}

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
	const { animations } = usePlace();

	return (
		<Flex
			as={MotionLink}
			isExternal
			href={url}
			direction='column'
			justify='center'
			pl='0.5rem'
			color='sand.sand12'
			borderLeftWidth={'0.3rem'}
			borderLeftColor='yellow.yellow9'
			_hover={{
				textDecoration: 'none',
				'& > h3': {
					textDecoration: 'underline',
				},
				'& > p': {
					opacity: 1,
					maxH: [null, null, null, '3rem'],
				},
			}}
			{...animations.place}
		>
			<Heading
				as='h3'
				color='sand.sand12'
				fontSize='3xl'
				textDecoration={['underline', null, null, 'none']}
			>
				{name} ({dates.from} - {dates.to})
			</Heading>
			<Text
				maxH={['10rem', null, null, '0']}
				opacity={[1, null, null, 0]}
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
