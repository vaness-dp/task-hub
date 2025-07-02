import cn from 'clsx'

import type { BaseProps } from '@/types'

export function Heading({ children, className = '' }: BaseProps) {
	return (
		<div className="flex items-center space-x-4 relative">
			<h1
				className={cn(
					'text-2xl font-semibold text-gray-900 dark:text-white relative z-10',
					className
				)}
			>
				{children}
			</h1>
		</div>
	)
}
