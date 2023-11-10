import { defineStyleConfig } from '@chakra-ui/react';

export const Mark = defineStyleConfig({
	baseStyle: ({ colorScheme = 'yellow' }) => {
		const hasContrastColor = ['gray', 'red', 'yellow', 'green'].includes(
			colorScheme
		);

		const contrastColor = hasContrastColor
			? `${colorScheme}9contrast`
			: `${colorScheme}12`;

		return {
			bgColor: `${colorScheme}.${colorScheme}9`,
			color: `${colorScheme}.${contrastColor}`,
			px: '0.3rem',
			py: '0.1rem',
		};
	},
});
