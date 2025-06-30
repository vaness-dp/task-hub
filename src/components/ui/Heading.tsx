import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function Heading({ children, className = '' }: Props) {
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
