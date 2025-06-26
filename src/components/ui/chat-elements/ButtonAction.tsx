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
				'w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors',
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
