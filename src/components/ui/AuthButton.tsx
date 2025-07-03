import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/styles'

import { InnerGlow } from './glass/InnerGlow'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
	children: ReactNode
	variant: 'primary' | 'secondary'
	href?: string
	className?: string
}

export function AuthButton({
	children,
	variant,
	href,
	className: customClassName,
	disabled = false,
	type = 'button',
	...props
}: Props) {
	const baseClasses =
		'w-full py-3 font-medium rounded-2xl block text-center relative overflow-hidden transition-all duration-150 ease-out origin-center hover:scale-[1.02] active:scale-[0.98]'

	const variantClasses = {
		primary:
			'bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50 shadow-lg hover:shadow-xl',
		secondary:
			'backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/30 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 shadow-lg hover:shadow-xl'
	}

	const className = cn(baseClasses, variantClasses[variant], customClassName)

	const ButtonContent = ({ children }: { children: ReactNode }) => (
		<>
			{variant === 'secondary' && (
				<>
					<InnerGlow className="rounded-2xl" />
				</>
			)}
			<span className="relative z-10">{children}</span>
		</>
	)

	if (href) {
		return (
			<Link
				href={href}
				className={className}
			>
				<ButtonContent>{children}</ButtonContent>
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
			<ButtonContent>{children}</ButtonContent>
		</button>
	)
}
