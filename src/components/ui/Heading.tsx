import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export function Heading({ children, className }: Props) {
	return <h1 className={cn('text-3xl font-medium text-black', className)}>{children}</h1>
}
