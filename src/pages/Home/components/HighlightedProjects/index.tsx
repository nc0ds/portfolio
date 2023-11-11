import { useHighlightedProjects } from './hooks/useHighlightedProjects';

import { Container, Heading, Text, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ProjectCard } from './components/ProjectCard';

export function HighlightedProjects(): JSX.Element {
	const { animations, highlightedProjects } = useHighlightedProjects();

	return (
		<Container
			as='section'
			pt='5rem'
		>
			<Heading
				as={motion.h2}
				{...animations.heading}
			>
				Cool, now let me highlight some projects for you to see
			</Heading>
			<Text
				as={motion.p}
				{...animations.text}
			>
				Yes, I do have some things to show, some of my studies if you want to
				take a look.
			</Text>
			<Grid
				templateColumns={'repeat(3, 1fr)'}
				gap={'2rem'}
				mt='2rem'
			>
				{highlightedProjects.map((item, index) => (
					<ProjectCard
						project={item}
						index={index + 1}
						colSpan={index === highlightedProjects.length - 1 ? 3 : 1}
					/>
				))}
			</Grid>
		</Container>
	);
}
