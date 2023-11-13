import { useProjectCard } from './hooks/useProjectCard';

import {
	GridItem,
	GridItemProps,
	Box,
	Heading,
	Text,
	Link,
	LinkProps,
} from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';

type MotionLinkProps = LinkProps & MotionProps & React.PropsWithChildren;

function MotionLink({ children, ...props }: MotionLinkProps): JSX.Element {
	return (
		<Link
			as={motion.a}
			{...props}
		>
			{children}
		</Link>
	);
}

type ProjectCard = {
	project: {
		name: string;
		description: string;
		url: string;
	};
	index?: number;
} & GridItemProps;

export function ProjectCard({
	project: { name, description, url },
	index,
	...props
}: ProjectCard): JSX.Element {
	const { animations } = useProjectCard();

	return (
		<GridItem
			as={MotionLink}
			href={url}
			isExternal
			borderWidth={'1px'}
			borderStyle={'solid'}
			borderColor={'sand.sand12'}
			borderRadius={'md'}
			minH={'20rem'}
			position={'relative'}
			overflow={'hidden'}
			_hover={{
				textDecoration: 'none',
				transform: [null, null, 'scale(1.05)'],
				boxShadow: '0 0 15px #ffe629',
				borderColor: 'yellow.yellow9',
				'& h3': {
					color: 'yellow.yellow9',
				},
				'& div:first-of-type': {
					opacity: 0,
				},
				'& div:last-of-type': {
					opacity: 1,
				},
			}}
			{...animations.card}
			{...props}
		>
			<Box
				position={'absolute'}
				w='100%'
				h='100%'
				p='1rem'
				transition='0.2s ease-in-out'
				opacity={[0, null, 1]}
			>
				{index && (
					<Text
						as='span'
						position={'absolute'}
						fontWeight={'extrabold'}
						fontSize='28rem'
						lineHeight={'20rem'}
						top='-2rem'
						right='-2rem'
						opacity={'0.1'}
					>
						{index}
					</Text>
				)}
				<Heading
					as='h3'
					position={'relative'}
					color='sand.sand12'
					fontSize={'5xl'}
					mb='1rem'
					transform={'translateY(-50%)'}
					top='50%'
				>
					{name}
				</Heading>
			</Box>
			<Box
				position={'absolute'}
				opacity={[1, null, 0]}
				transition='0.2s ease-in-out'
				p='1rem'
				w='100%'
				h='100%'
			>
				<Heading
					as='h3'
					position={'relative'}
					color={[null, null, 'sand.sand12']}
					fontSize={'5xl'}
					mb='1rem'
				>
					{name}
				</Heading>
				<Text
					color='sand.sand12'
					position='relative'
				>
					{description}
				</Text>
			</Box>
		</GridItem>
	);
}
