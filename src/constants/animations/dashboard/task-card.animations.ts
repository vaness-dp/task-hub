import type { Variants } from 'framer-motion'

export const taskCard = {
	card: {
		initial: {
			scale: 1,
			y: 0
		},
		hover: {
			scale: 1.02,
			y: -4,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20
			} as const
		}
	} satisfies Variants,

	icon: {
		initial: {
			scale: 1,
			rotate: 0
		},
		hover: {
			scale: 1.1,
			rotate: 6,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15,
				delay: 0.1
			} as const
		}
	} satisfies Variants,

	title: {
		initial: {
			scale: 1
		},
		hover: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 20,
				delay: 0.05
			} as const
		}
	} satisfies Variants,

	stats: {
		initial: {
			scale: 1
		},
		hover: {
			scale: 1.1,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15,
				delay: 0.1
			} as const
		}
	} satisfies Variants,

	action: {
		initial: {
			scale: 1
		},
		hover: {
			scale: 1.1,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15
			} as const
		}
	} satisfies Variants
} as const
