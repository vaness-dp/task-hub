import cn from 'clsx'

export { cn }

export const buttonVariants = {
	primary:
		'bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80',
	secondary: 'glass-button text-gray-900 dark:text-white',
	ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
} as const

export const buttonSizes = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-sm',
	lg: 'px-6 py-3 text-base'
} as const

/**
 * Generates button styles based on variant, size and custom className
 * @param variant - Button visual variant
 * @param size - Button size
 * @param className - Additional CSS classes
 * @returns Combined class string
 */
export const getButtonVariantStyles = (
	variant: ButtonVariant = 'primary',
	size: ButtonSize = 'md',
	className?: string
) => {
	return cn(
		'relative overflow-hidden rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
		buttonVariants[variant],
		buttonSizes[size],
		className
	)
}

export const iconSizes = {
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6'
} as const

/**
 * Generates icon styles with size and optional className
 * @param size - Icon size
 * @param className - Additional CSS classes
 * @returns Combined class string
 */
export const getIconStyles = (size: keyof typeof iconSizes = 'md', className?: string) => {
	return cn(iconSizes[size], 'text-neutral-600 dark:text-neutral-300', className)
}

// Type exports for better TypeScript support
export type ButtonVariant = keyof typeof buttonVariants
export type ButtonSize = keyof typeof buttonSizes
