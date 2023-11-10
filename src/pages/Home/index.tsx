import { Box } from '@chakra-ui/react';

import { Introduction, AboutMe, Technologies } from './components';

export function Home(): JSX.Element {
	return (
		<Box as='main'>
			<Introduction />
			<AboutMe />
			<Technologies />
		</Box>
	);
}
