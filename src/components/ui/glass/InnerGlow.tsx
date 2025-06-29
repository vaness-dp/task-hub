import { twMerge } from 'tailwind-merge'

export function InnerGlow({ className }: { className?: string }) {
	return (
		<div
			className={twMerge(
				'absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent rounded-3xl',
				className
			)}
		/>
	)
}
