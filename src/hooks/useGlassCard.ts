import cn from 'clsx'

type GlassVariant = 'primary' | 'secondary' | 'card' | 'button'

export const useGlassCard = (variant: GlassVariant = 'primary') => {
	const baseClasses = 'backdrop-blur-xl rounded-3xl border transition-all duration-200'

	const variants = {
		primary: 'bg-white/60 dark:bg-white/5 border-white/30 dark:border-white/10',
		secondary: 'bg-white/40 dark:bg-white/3 border-white/20 dark:border-white/8',
		card: 'bg-white/40 dark:bg-white/5 border-white/30 dark:border-white/10 p-6 shadow-lg',
		button:
			'bg-white/40 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 shadow-sm hover:shadow-lg'
	}

	return cn(baseClasses, variants[variant])
}
