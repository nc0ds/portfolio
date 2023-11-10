import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
	baseStyle: {
		fontWeight: '500',
		cursor: 'default',
		borderRadius: 'md',
	},
	variants: {
		solid: ({ colorScheme }) => {
			const hasContrastColor = ['gray', 'red', 'yellow', 'green'].includes(
				colorScheme
			);

			const contrastColor = hasContrastColor
				? `${colorScheme}9contrast`
				: `${colorScheme}12`;

			return {
				bg: `${colorScheme}.${colorScheme}9`,
				color: `${colorScheme}.${contrastColor}`,
				_disabled: {
					opacity: '1',
					cursor: 'not-allowed',
					color: 'sand.sandA8',
					bg: 'sand.sandA3',
				},
				_hover: {
					bg: `${colorScheme}.${colorScheme}10`,
					color: `${colorScheme}.${contrastColor}`,
					_disabled: {
						opacity: '1',
						cursor: 'not-allowed',
						color: 'sand.sandA8',
						bg: 'sand.sandA3',
					},
				},
				_active: {
					bg: `${colorScheme}.${colorScheme}10`,
					color: `${colorScheme}.${contrastColor}`,
				},
			};
		},
		soft: ({ colorScheme }) => {
			return {
				bg: `${colorScheme}.${colorScheme}A3`,
				color: `${colorScheme}.${colorScheme}A11`,
				_disabled: {
					opacity: '1',
					cursor: 'not-allowed',
					color: 'sand.sandA8',
					bg: 'sand.sandA3',
				},
				_hover: {
					bg: `${colorScheme}.${colorScheme}A4`,
					_disabled: {
						opacity: '1',
						cursor: 'not-allowed',
						color: 'sand.sandA8',
						bg: 'sand.sandA3',
					},
				},
				_active: {
					bg: `${colorScheme}.${colorScheme}A5`,
				},
			};
		},
		surface: ({ colorScheme }) => {
			return {
				bg: `${colorScheme}.${colorScheme}surface`,
				color: `${colorScheme}.${colorScheme}A11`,
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: `${colorScheme}.${colorScheme}A7`,
				_disabled: {
					opacity: '1',
					cursor: 'not-allowed',
					color: 'sand.sandA8',
					bg: 'sand.sandA2',
					borderColor: 'sand.sandA6',
				},
				_hover: {
					borderColor: `${colorScheme}.${colorScheme}A8`,
					_disabled: {
						opacity: '1',
						cursor: 'not-allowed',
						color: 'sand.sandA8',
						bg: 'sand.sandA2',
						borderColor: 'sand.sandA6',
					},
				},
				_active: {
					bg: `${colorScheme}.${colorScheme}A3`,
					borderColor: `${colorScheme}.${colorScheme}A8`,
				},
			};
		},
		outline: ({ colorScheme }) => {
			return {
				bg: 'transparent',
				color: `${colorScheme}.${colorScheme}A11`,
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: `${colorScheme}.${colorScheme}A7`,
				_disabled: {
					opacity: '1',
					cursor: 'not-allowed',
					color: 'sand.sandA8',
					borderColor: 'sand.sandA7',
				},
				_hover: {
					bg: `${colorScheme}.${colorScheme}A2`,
					borderColor: `${colorScheme}.${colorScheme}A8`,
					_disabled: {
						opacity: '1',
						cursor: 'not-allowed',
						color: 'sand.sandA8',
						borderColor: 'sand.sandA7',
					},
				},
				_active: {
					bg: `${colorScheme}.${colorScheme}A3`,
					borderColor: `${colorScheme}.${colorScheme}A8`,
				},
			};
		},
		ghost: ({ colorScheme }) => {
			return {
				bg: 'transparent',
				color: `${colorScheme}.${colorScheme}A11`,
				_disabled: {
					opacity: '1',
					cursor: 'not-allowed',
					color: 'sand.sandA8',
				},
				_hover: {
					bg: `${colorScheme}.${colorScheme}A3`,
					_disabled: {
						opacity: '1',
						cursor: 'not-allowed',
						color: 'sand.sandA8',
					},
				},
				_active: {
					bg: `${colorScheme}.${colorScheme}A4`,
				},
			};
		},
	},
});
