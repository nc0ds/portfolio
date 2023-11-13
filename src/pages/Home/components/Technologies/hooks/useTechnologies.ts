import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiRedux,
	SiStyledcomponents,
	SiChakraui,
	SiSupabase,
	SiJest,
	SiVitest,
	SiStorybook,
} from 'react-icons/si';

export function useTechnologies() {
	const icons = [
		{
			title: 'HTML',
			icon: SiHtml5,
		},
		{
			title: 'CSS',
			icon: SiCss3,
		},
		{
			title: 'JavaScript',
			icon: SiJavascript,
		},
		{
			title: 'React',
			icon: SiReact,
		},
		{
			title: 'Next.js',
			icon: SiNextdotjs,
		},
		{
			title: 'Redux',
			icon: SiRedux,
		},
		{
			title: 'Styled-components',
			icon: SiStyledcomponents,
		},
		{
			title: 'Chakra UI',
			icon: SiChakraui,
		},
		{
			title: 'Supabase',
			icon: SiSupabase,
		},
		{
			title: 'Jest',
			icon: SiJest,
		},
		{
			title: 'Vitest',
			icon: SiVitest,
		},
		{
			title: 'Storybook',
			icon: SiStorybook,
		},
	];

	const animations = {
		heading: {
			position: 'relative' as 'relative',
			initial: {
				opacity: 0,
				top: '1rem',
			},
			whileInView: {
				opacity: 1,
				top: 0,
			},
		},
		text: {
			position: 'relative' as 'relative',
			initial: {
				opacity: 0,
				left: '-1rem',
			},
			whileInView: {
				opacity: 1,
				left: 0,
			},
		},
		iconsContainer: {
			position: 'relative' as 'relative',
			initial: {
				opacity: 0,
				left: '-1rem',
			},
			whileInView: {
				opacity: 1,
				left: 0,
			},
		},
	};

	return {
		icons,
		animations,
	};
}
