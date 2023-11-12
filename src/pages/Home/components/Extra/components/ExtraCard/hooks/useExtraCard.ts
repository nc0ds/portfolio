export function useExtraCard() {
	const animations = {
		content: {
			position: 'relative' as 'relative',
			initial: {
				opacity: 0,
				top: '-2rem',
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
