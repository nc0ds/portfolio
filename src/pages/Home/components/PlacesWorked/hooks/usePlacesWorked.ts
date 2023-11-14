export function usePlacesWorked() {
	const places = [
		{
			name: 'Webjump',
			description:
				'Maintenance and code creation in Next.js in an e-commerce projects',
			dates: {
				from: '2022/01',
				to: '2023/06',
			},
			url: 'https://webjump.com.br/',
		},
		{
			name: 'iprop.tech',
			description:
				'In charge of all the development process of both Front End and Back End applications, ensuring the functioning of the project',
			dates: {
				from: '2021/06',
				to: '2022/01',
			},
			url: 'https://iprop.tech/',
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
		places,
		animations,
	};
}
