import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export function SidebarToggle({ children, ...props }: Props) {
	return (
		<button
			className="opacity-80 transition-opacity hover:opacity-100 absolute top-3 right-3 z-50"
			title="Toggle sidebar"
			{...props}
		>
			{children}
		</button>
	)
}
