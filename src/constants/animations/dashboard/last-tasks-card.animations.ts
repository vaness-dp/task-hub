import type { Variants } from 'framer-motion'

export const lastTasksCardAnimations = {
	basic: {
		initial: {
			scale: 1,
			y: 0
		},
		animate: {
			scale: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1
			}
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
	subtle: {
		initial: {
			scale: 0.8,
			y: 30,
			opacity: 0
		},
		animate: (index: number) => ({
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				delay: index * 0.1,
				duration: 0.3,
				ease: 'easeOut'
			}
		}),
		exit: {
			scale: 0.9,
			y: -20,
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: 'easeIn'
			}
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
