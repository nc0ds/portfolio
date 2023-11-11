export function usePlace() {
	const animations = {
		place: {
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
		animations,
	};
}
