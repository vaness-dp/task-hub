import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function AuthHeading({ children, className }: Props) {
	return (
		<div className="text-center mb-8">
			<h1 className={cn('text-xl font-semibold text-gray-900 dark:text-white', className)}>
				{children}
			</h1>
		</div>
	)
}
