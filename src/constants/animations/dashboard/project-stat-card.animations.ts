import type { Variants } from 'framer-motion'

export const cardAnimations = {
	basic: {
		initial: {
			scale: 1,
			y: 0
		},
		hover: {
			scale: 1.02,
			y: -8,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20
			} as const
		}
	} satisfies Variants,
	// content
	subtle: {
		initial: {
			scale: 1,
			y: 0
		},
		hover: {
			scale: 1.05,
			y: -2,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 20,
				delay: 0.1
			} as const
		}
	} satisfies Variants,
	// icon
	intense: {
		initial: {
			scale: 1,
			rotate: 0,
			y: 0
		},
		hover: {
			scale: 1.15,
			rotate: 12,
			y: -4,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15,
				delay: 0.15
			} as const
		}
	} satisfies Variants
} as const
