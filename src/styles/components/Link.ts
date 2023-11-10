import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
	baseStyle: ({ colorScheme }) => {
		return {
			cursor: 'pointer',
			color: `${colorScheme}.${colorScheme}A11`,
			textDecoration: 'none',
			_hover: {
				textDecoration: 'underline',
			},
		};
	},
});
