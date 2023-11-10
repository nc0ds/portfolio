import { Flex } from '@chakra-ui/react';

type TechIconProps = {
	icon: React.ElementType;
	title: string;
};

export function TechIcon({ icon: Icon, title }: TechIconProps): JSX.Element {
	return (
		<Flex
			w='fit-content'
			p='1rem'
			fontSize='3rem'
			justify='center'
			align='center'
			borderWidth='1px'
			borderStyle='solid'
			borderColor='transparent'
			borderRadius='md'
			transition='0.1s ease-in-out'
			title={title}
			_hover={{
				borderColor: 'yellow.yellow9',
				boxShadow: '0 0 15px #ffe629, inset 0 0 10px #ffe62988',
				transform: 'scale(1.1)',
				color: 'yellow.yellow9',
			}}
		>
			<Icon title={title} />
		</Flex>
	);
}
