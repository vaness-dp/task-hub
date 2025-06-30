import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: ReactNode
	className?: string
}

export function Decorative({ children, className }: Props) {
	return (
		<div
			className={twMerge(
				'absolute flex items-center justify-center backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20',
				className
			)}
		>
			{children}
		</div>
	)
}
