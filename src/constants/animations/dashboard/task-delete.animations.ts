import type { Variants } from 'framer-motion'

/**
 * Task deletion animations with smooth transitions
 */

/**
 * Task card deletion animation
 */
export const taskDeleteAnimation: Variants = {
	initial: {
		opacity: 1,
		scale: 1,
		y: 0
	},
	deleting: {
		opacity: 0,
		scale: 0.9,
		y: -20,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1]
		}
	},
	deleted: {
		opacity: 0,
		scale: 0.8,
		y: -30,
		height: 0,
		marginBottom: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
}

/**
 * Grid layout animation for remaining tasks
 */
export const taskGridReflow: Variants = {
	initial: {
		opacity: 1,
		scale: 1
	},
	reflow: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
			staggerChildren: 0.1
		}
	}
}

/**
 * Success notification animation
 */
export const deleteNotification: Variants = {
	initial: {
		opacity: 0,
		y: 50,
		scale: 0.95
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeOut'
		}
	},
	hide: {
		opacity: 0,
		y: -20,
		scale: 0.95,
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	}
}
