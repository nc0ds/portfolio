import { Box } from '@chakra-ui/react';

import {
	Introduction,
	AboutMe,
	Technologies,
	HighlightedProjects,
	PlacesWorked,
	Extra,
	ContactMe,
} from './components';

export function Home(): JSX.Element {
	return (
		<>
			<Box as='main'>
				<Introduction />
				<AboutMe />
				<Technologies />
				<HighlightedProjects />
				<PlacesWorked />
				<Extra />
			</Box>
			<Box
				as='footer'
				bgColor='yellow.yellow10'
				mt='5rem'
				py='5rem'
			>
				<ContactMe />
			</Box>
		</>
	);
}
