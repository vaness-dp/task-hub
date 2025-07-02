import type { Variants } from 'framer-motion'

/**
 * Fast animations for settings navigation
 * Optimized for quick and responsive feel
 */
export const settingsNavigationAnimations: Variants = {
	initial: {
		opacity: 0,
		x: -10,
		scale: 0.98
	},
	hover: {
		scale: 1.02,
		x: 2,
		transition: {
			duration: 0.15,
			ease: 'easeOut'
		}
	},
	tap: {
		scale: 0.98,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	},
	animate: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			duration: 0.2,
			ease: 'easeOut'
		}
	}
}

/**
 * Content transition animations
 */
export const settingsContentAnimations: Variants = {
	initial: {
		opacity: 0,
		x: 20,
		y: 5
	},
	animate: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.25,
			ease: 'easeOut'
		}
	},
	exit: {
		opacity: 0,
		x: -20,
		y: -5,
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	}
}

/**
 * Card entrance animations
 */
export const settingsCardAnimations: Variants = {
	initial: {
		opacity: 0,
		y: 10,
		scale: 0.98
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeOut'
		}
	}
}
