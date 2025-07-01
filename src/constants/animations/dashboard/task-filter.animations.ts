import type { Variants } from 'framer-motion'

export const taskFilter = {
	trigger: {
		initial: {
			scale: 1,
			y: 0
		},
		hover: {
			scale: 1.02,
			y: -2,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20
			} as const
		}
	} satisfies Variants,

	chevron: {
		initial: {
			rotate: 0,
			scale: 1
		},
		open: {
			rotate: 180,
			scale: 1.1,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15
			} as const
		}
	} satisfies Variants,

	menu: {
		initial: {
			opacity: 0,
			scale: 0.95,
			y: -8
		},
		open: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20
			} as const
		},
		closed: {
			opacity: 0,
			scale: 0.95,
			y: -8,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20
			} as const
		}
	} satisfies Variants,

	item: {
		initial: {
			opacity: 0,
			x: -8,
			scale: 0.95
		},
		open: (i: number) => ({
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 20,
				delay: i * 0.05
			} as const
		}),
		hover: {
			scale: 1.02,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15
			} as const
		}
	} satisfies Variants,

	count: {
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
	} satisfies Variants
} as const
