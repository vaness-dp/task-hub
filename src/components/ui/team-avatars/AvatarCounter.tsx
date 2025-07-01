import cn from 'clsx'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

interface Props {
	count: number
	className?: string
}

export const AvatarCounter = ({ count, className }: Props) => {
	return (
		<div
			className={cn(
				'w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full border-2 border-white/50 dark:border-white/30 flex items-center justify-center text-white text-sm font-semibold relative overflow-hidden',
				className
			)}
		>
			<GradientOverlay
				variant="quinary"
				className="rounded-full"
			/>
			<span className="relative z-10">+{count}</span>
		</div>
	)
}
