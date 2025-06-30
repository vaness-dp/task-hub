import { twMerge } from 'tailwind-merge'

interface Props {
	className?: string
	variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export function GradientOverlay({ className, variant = 'primary' }: Props) {
	const baseStyles = 'absolute inset-0 bg-gradient-to-br'

	const variants = {
		primary:
			'from-black/5 via-transparent to-black/10 dark:from-black/20 dark:via-transparent dark:to-black/40',
		secondary: 'from-white/20 via-transparent to-white/10 rounded-2xl',
		tertiary: 'from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent',
		quaternary: 'from-white/30 via-transparent to-transparent dark:from-white/20'
	}

	return <div className={twMerge(baseStyles, variants[variant], className)} />
}
