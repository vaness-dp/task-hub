import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function Heading({ children, className = '' }: Props) {
	return (
		<h1 className={cn('text-2xl font-semibold text-primary-content', className)}>{children}</h1>
	)
}
