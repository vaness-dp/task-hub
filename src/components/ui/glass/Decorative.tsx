import { twMerge } from 'tailwind-merge'

import type { BaseProps } from '@/types'

export function Decorative({ children, className = '' }: BaseProps) {
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
