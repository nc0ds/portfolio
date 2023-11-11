export function useProjectCard() {
	const animations = {
		card: {
			initial: {
				opacity: 0,
				top: '1rem',
			},
			whileInView: {
				opacity: 1,
				top: 0,
			},
		},
	};

	return {
		animations,
	};
}
