import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import {
	yellowDark,
	yellowDarkA,
	sandDark,
	sandDarkA,
	gray,
	grayA,
	red,
	redA,
	green,
	greenA,
} from '@radix-ui/colors';

import { Button } from './components/Button';
import { Link } from './components/Link';
import { Mark } from './components/Mark';
import { Heading } from './components/Heading';

const colors = {
	sand: { ...sandDark, ...sandDarkA },
	gray: {
		...gray,
		...grayA,
		gray9contrast: '#ffffff',
		graysurface: '#21212080',
	},
	yellow: {
		...yellowDark,
		...yellowDarkA,
		yellow9contrast: '#21201c',
		yellowsurface: '#231f1380',
	},
	red: { ...red, ...redA, red9contrast: '#ffffff', redsurface: '#2f151780' },
	green: {
		...green,
		...greenA,
		green9contrast: '#ffffff',
		greensurface: '#15251d80',
	},
};

const styles = {
	global: {
		body: {
			bg: 'sand.sand1',
			color: 'sand.sand12',
		},
		em: {
			fontFamily: 'Times New Roman, serif',
			fontWeight: '500',
		},
		i: {
			fontFamily: 'Times New Roman, serif',
			fontWeight: '500',
		},
	},
};

const fonts = {
	body: 'system-ui, sans-serif',
	heading: 'system-ui, sans-serif',
};

const borderRadius = {
	radii: {
		none: '0',
		sm: '0.375rem',
		md: '0.5rem',
		lg: '0.75rem',
		full: '9999rem',
	},
};

const config = {
	initialColorMode: 'dark',
};

export const theme = extendTheme(
	withDefaultColorScheme({
		colorScheme: 'yellow',
	}),
	{
		colors,
		styles,
		fonts,
		...borderRadius,
		config,
		components: {
			Button,
			Link,
			Mark,
			Heading,
		},
	}
);
