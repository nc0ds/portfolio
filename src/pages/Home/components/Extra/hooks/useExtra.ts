export function useExtra() {
	const extras = [
		{
			title: 'Exchange in Dublin',
			description:
				'An experience for life. I spent three weeks in Dublin, Ireland to study english and came back home with an amazing experience. Being in contact with a whole different culture with completely different people was incredible.',
			url: null,
			img: {
				url: 'https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_1920,h_1080,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg',
				alt: 'View of the Liffey River',
			},
		},
		{
			title: 'Studing the community-driven CS curriculum',
			description:
				'I am currently studing the contents of this repository, a community-driven computer science curriculum made entirely with free courses and resources from the internet. You can check it out by clicking here.',
			url: 'https://github.com/ossu/computer-science',
			img: {
				url: 'https://camo.githubusercontent.com/571d23edad9da0a656fdf95f6483ac63585ea09542b7620749880627b4b2161e/68747470733a2f2f692e696d6775722e636f6d2f6b5959435874432e706e67',
				alt: 'Image written Open Source Society University',
			},
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
	};

	return {
		extras,
		animations,
	};
}
