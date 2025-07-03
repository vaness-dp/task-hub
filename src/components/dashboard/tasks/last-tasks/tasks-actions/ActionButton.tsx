import cn from 'clsx'
import * as m from 'framer-motion/m'
import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

import { cardAnimations } from '@/constants/animations/dashboard/project-stat-card.animations'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: LucideIcon
	variant?: 'primary' | 'secondary'
	onClick?: () => void
	disabled?: boolean
	className?: string
}

export function ActionButton({
	icon: Icon,
	variant = 'secondary',
	onClick,
	className,
	disabled
}: Props) {
	const baseStyles =
		'w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden border shadow-sm'

	const variants = {
		primary:
			'bg-gradient-to-r from-primary to-primary/90 text-white border-white/30 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
		secondary:
			'bg-white/40 dark:bg-white/20 text-gray-600 dark:text-gray-400 border-white/30 dark:border-white/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed'
	}

	return (
		<m.button
			whileHover={disabled ? undefined : 'hover'}
			variants={cardAnimations.subtle}
			onClick={onClick}
			disabled={disabled}
			className={cn(baseStyles, variants[variant], className)}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-full" />
			<Icon className="w-4 h-4 relative z-10" />
		</m.button>
	)
}
