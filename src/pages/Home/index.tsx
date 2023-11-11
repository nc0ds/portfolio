import { Box } from '@chakra-ui/react';

import {
	Introduction,
	AboutMe,
	Technologies,
	HighlightedProjects,
	PlacesWorked,
} from './components';

export function Home(): JSX.Element {
	return (
		<Box as='main'>
			<Introduction />
			<AboutMe />
			<Technologies />
			<HighlightedProjects />
			<PlacesWorked />
		</Box>
	);
}
