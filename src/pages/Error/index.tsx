import { useRouteError, ErrorResponse } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
	Center,
	Container,
	Heading,
	Text,
	Link as ChakraLink,
} from '@chakra-ui/react';

export function Error(): JSX.Element {
	const error = useRouteError() as ErrorResponse;

	return (
		<Center
			as='main'
			minH='100vh'
		>
			<Container>
				{error.status !== 404 ? (
					<>
						<Heading textAlign='center'>
							Ahh... I don't know what happened here, sorry!
						</Heading>
						<Text
							mx='auto'
							maxW='80%'
							align='center'
						>
							But hey, humm, you can{' '}
							<ChakraLink
								as={Link}
								to='/'
							>
								go back to homepage by clicking here
							</ChakraLink>
							, you know...
						</Text>
					</>
				) : (
					<>
						<Heading textAlign='center'>
							Ops... This page doesn't exist!
						</Heading>
						<Text
							mx='auto'
							maxW='80%'
							align='center'
						>
							I don't know how you ended up here, but maybe you should{' '}
							<ChakraLink
								as={Link}
								to='/'
							>
								go back to homepage
							</ChakraLink>
							. You know, because there is nothing here, so...
						</Text>
					</>
				)}
			</Container>
		</Center>
	);
}
