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
			className={twMerge('button-action group', className)}
			{...props}
		>
			{children}
		</button>
	)
}
