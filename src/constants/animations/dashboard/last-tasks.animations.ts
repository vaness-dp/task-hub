import type { Variants } from 'framer-motion'

export const lastTasks = {
	container: {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
				staggerChildren: 0.05
			}
		},
		exit: {
			opacity: 0,
			y: -10,
			transition: {
				duration: 0.15
			}
		}
	} satisfies Variants,

	task: {
		initial: {
			opacity: 0,
			scale: 0.9,
			y: 10
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 25,
				delay: i * 0.05
			} as const
		}),
		exit: {
			opacity: 0,
			scale: 0.95,
			y: -10,
			transition: {
				duration: 0.15
			}
		}
	} satisfies Variants
} as const
