import { useExtraCard } from './hooks/useExtraCard';

import {
	Flex,
	FlexProps,
	Box,
	Heading,
	Text,
	Image,
	Link,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

type ComponentProps = {
	isLink: boolean;
	href?: string;
} & React.PropsWithChildren &
	FlexProps;

function Component({
	isLink = false,
	children,
	...props
}: ComponentProps): JSX.Element {
	if (isLink)
		return (
			<Flex
				as={Link}
				isExternal
				href={props.href}
				_hover={{
					textDecoration: 'none',
					'& h3': {
						textDecoration: 'underline',
					},
				}}
				{...props}
			>
				{children}
			</Flex>
		);

	return <Flex {...props}>{children}</Flex>;
}

type ExtraCardProps = {
	item: {
		title: string;
		description: string;
		url?: string | null;
		img: {
			url: string;
			alt: string;
		};
	};
	variant: 'imgLeft' | 'imgRight';
};

export function ExtraCard({
	item: { title, description, url, img },
	variant = 'imgRight',
}: ExtraCardProps): JSX.Element {
	const { animations } = useExtraCard();

	return (
		<Component
			isLink={!!url}
			href={!!url ? url : undefined}
			borderWidth='1px'
			borderColor='sand.sand12'
			borderRadius='md'
			w='100%'
			minH='20rem'
			direction={[
				'column-reverse',
				null,
				variant === 'imgLeft' ? 'row-reverse' : 'row',
			]}
			color='sand.sand12'
			overflow={'hidden'}
		>
			<Box
				as={motion.div}
				p='1rem'
				{...animations.content}
			>
				<Heading
					as='h3'
					fontSize='3xl'
					color='sand.sand12'
				>
					{title}
				</Heading>
				<Text>{description}</Text>
			</Box>
			<Image
				src={img.url}
				alt={img.alt}
				h='20rem'
				w={['100%', null, '40%']}
				objectFit={'cover'}
			/>
		</Component>
	);
}
