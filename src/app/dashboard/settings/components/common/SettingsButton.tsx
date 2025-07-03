import type { LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

import { Icon } from '@/components/ui/Icon'

import { cn } from '@/utils/styles'

import type { WithChildren } from '@/types/common'

interface Props extends WithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
	variant?: 'primary' | 'secondary' | 'danger'
	icon?: LucideIcon
	loading?: boolean
}

export function SettingsButton({
	children,
	variant = 'primary',
	icon: IconComponent,
	loading,
	className,
	...props
}: Props) {
	const baseStyles =
		'inline-flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-200 relative overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed'

	const variantStyles = {
		primary:
			'bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80',
		secondary:
			'backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/10',
		danger:
			'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
	}

	return (
		<button
			className={cn(baseStyles, variantStyles[variant], className)}
			disabled={loading}
			{...props}
		>
			{variant === 'secondary' && (
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl" />
			)}

			<div className="relative z-10 flex items-center space-x-2">
				{IconComponent && (
					<Icon
						icon={IconComponent}
						className={
							variant === 'primary' || variant === 'danger'
								? 'text-white'
								: 'text-gray-600 dark:text-gray-300'
						}
					/>
				)}
				{loading ? (
					<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
				) : (
					<span>{children}</span>
				)}
			</div>
		</button>
	)
}
