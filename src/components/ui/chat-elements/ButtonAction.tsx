import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
}

export function ButtonAction({ children, className, ...props }: Props) {
	return (
		<button
			type="button"
			className={twMerge(
				'w-10 h-10 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200 relative overflow-hidden group shadow-sm',
				className
			)}
			{...props}
		>
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 dark:from-white/8 dark:to-transparent rounded-xl" />
			<div className="absolute inset-[1px] border border-white/50 rounded-xl pointer-events-none dark:border-transparent" />

			<div className="relative z-10 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
				{children}
			</div>
		</button>
	)
}
