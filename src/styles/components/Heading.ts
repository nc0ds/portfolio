import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
	baseStyle: ({ colorScheme }) => {
		return {
			color: `${colorScheme}.${colorScheme}9`,
		};
	},
});
