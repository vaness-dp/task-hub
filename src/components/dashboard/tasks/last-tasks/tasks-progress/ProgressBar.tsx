import cn from 'clsx'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

interface Props {
	progress: number
	text: string
	bgGradient: string
	glowEffect: string
}

export function ProgressBar({ progress, text, bgGradient, glowEffect }: Props) {
	return (
		<div className="w-full h-10 bg-gray-100 dark:bg-neutral-700 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-600 relative shadow-inner">
			<div
				className={cn(
					'h-full rounded-2xl transition-all duration-500 ease-out flex items-center justify-center text-white font-semibold text-sm relative overflow-hidden',
					'bg-gradient-to-r',
					bgGradient,
					'shadow-lg',
					glowEffect
				)}
				style={{ width: `${progress}%` }}
			>
				<GradientOverlay variant="secondary" />
				<span className="relative z-10 drop-shadow-sm">{text}</span>
			</div>
		</div>
	)
}
