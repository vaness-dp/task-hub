import { cn } from '@/utils/styles'

import type { BaseProps } from '@/types'

export function AuthHeading({ children, className = '' }: BaseProps) {
	return (
		<div className="text-center mb-8">
			<h1 className={cn('text-xl font-semibold text-gray-900 dark:text-white', className)}>
				{children}
			</h1>
		</div>
	)
}
