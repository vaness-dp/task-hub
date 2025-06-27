import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function Heading({ children, className = '' }: Props) {
	return (
		<div className="flex items-center space-x-4 relative">
			{/* Decorative circle */}
			<div className="absolute -top-2 left-8 w-6 h-6 bg-white/8 dark:bg-white/10 rounded-full opacity-0 dark:opacity-100 transition-opacity" />

			{/* Diamond */}
			<div className="relative">
				<div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/60 rotate-45 rounded-sm shadow-lg border border-white/30 dark:border-white/20 backdrop-blur-sm relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 dark:from-white/20 dark:to-transparent rounded-sm" />
				</div>
				{/* Small dots around */}
				<div className="absolute -top-1 -left-1 w-1 h-1 bg-primary/60 rounded-full shadow-sm" />
				<div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/40 rounded-full shadow-sm" />
			</div>

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
