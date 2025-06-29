import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	isActive?: boolean
	children?: ReactNode
}

export function Badge({ isActive, children }: Props) {
	return (
		<div
			className={cn(
				'absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 z-10',
				isActive ? 'bg-white/20 text-white' : 'bg-primary/80  text-white'
			)}
		>
			{children}
		</div>
	)
}
