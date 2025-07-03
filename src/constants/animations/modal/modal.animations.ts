import type { Variants } from 'framer-motion'

export const modalBackdrop: Variants = {
	initial: {
		opacity: 0,
		backdropFilter: 'blur(0px)'
	},
	animate: {
		opacity: 1,
		backdropFilter: 'blur(8px)',
		transition: {
			duration: 0.3,
			ease: 'easeOut'
		}
	},
	exit: {
		opacity: 0,
		backdropFilter: 'blur(0px)',
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	}
}

export const modalContent: Variants = {
	initial: {
		opacity: 0,
		scale: 0.9,
		y: 20
	},
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: [0.25, 0.1, 0.25, 1],
			type: 'spring',
			stiffness: 300,
			damping: 25
		}
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		y: 10,
		transition: {
			duration: 0.2,
			ease: 'easeIn'
		}
	}
}

export const modalForm: Variants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1
		}
	}
}

export const modalField: Variants = {
	initial: {
		opacity: 0,
		y: 15,
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
