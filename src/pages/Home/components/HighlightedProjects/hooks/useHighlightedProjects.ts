export function useHighlightedProjects() {
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
	};

	const highlightedProjects = [
		{
			name: 'Portfolio',
			description:
				'This portfolio right here. A simple project using React and Chakra UI. Take a look for yourself on how this website is being constructed.',
			url: 'https://github.com/nc0ds/portfolio',
		},
		{
			name: 'dashgo',
			description:
				'A dashboard interface project. It was made in Next.js and Chakra UI too. Also, this project was made to study cool stacks such as React Query and MirageJS.',
			url: 'https://github.com/nc0ds/dashgo',
		},
		{
			name: 'ig.news',
			description:
				'A project using Next.js. Made to study the implementation of Stripe, a payment gateway, alongside with Prismic.io as a headless CMS and NextAuth.js for the authorization management.',
			url: 'https://github.com/nc0ds/ignews',
		},
		{
			name: 'My GitHub',
			description:
				"You can see all my projects here on my GitHub. Don't be afraid, I don't bite, feel free to click here anytime.",
			url: 'https://github.com/nc0ds',
		},
	];

	return {
		animations,
		highlightedProjects,
	};
}
