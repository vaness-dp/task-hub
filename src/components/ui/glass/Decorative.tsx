import cn from 'clsx'

interface Props {
	size: 'small' | 'medium'
	position: 'top-right' | 'bottom-left'
	className?: string
}

export function Decorative({ className, size, position }: Props) {
	return (
		<div
			className={cn(
				size === 'small' && 'w-2 h-2',
				size === 'medium' && 'w-3 h-3',
				position === 'top-right' && 'top-2 right-2',
				position === 'bottom-left' && 'bottom-2 left-2',
				'absolute dark:bg-white/10 rounded-full group-hover:scale-125 group-hover:bg-white/25 dark:group-hover:bg-white/20 transition-all duration-300',
				className
			)}
		/>
	)
}
