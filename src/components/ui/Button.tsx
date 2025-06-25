import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
	children: ReactNode
	variant: 'primary' | 'secondary'
	href?: string
	className?: string
}

export function Button({
	children,
	variant,
	href,
	className: customClassName,
	disabled = false,
	type = 'button',
	...props
}: Props) {
	const baseClasses = 'w-full py-3 font-medium rounded-full transition-colors block text-center'

	const variantClasses = {
		primary: 'bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50',
		secondary:
			'bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
	}

	const className = `${baseClasses} ${variantClasses[variant]} ${customClassName || ''}`

	if (href) {
		return (
			<Link
				href={href}
				className={className}
			>
				{children}
			</Link>
		)
	}

	return (
		<button
			type={type}
			disabled={disabled}
			className={className}
			{...props}
		>
			{children}
		</button>
	)
}
