import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function Heading({ children, className = '' }: Props) {
	return (
		<h1 className={`text-2xl font-semibold text-[#2a2a2a] dark:text-[#f5f5f5] ${className}`}>
			{children}
		</h1>
	)
}
