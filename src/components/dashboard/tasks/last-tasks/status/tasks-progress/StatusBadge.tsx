import { Check } from 'lucide-react'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'

import { cn } from '@/utils/styles'

interface Props {
	text: string
	bgGradient: string
	glowEffect: string
}

export function StatusBadge({ text, bgGradient, glowEffect }: Props) {
	return (
		<div
			className={cn(
				'w-full h-10 rounded-2xl text-white text-sm font-semibold text-center transition-all duration-300 ease-out relative overflow-hidden border border-white/30 flex items-center justify-center space-x-2',
				'bg-gradient-to-r',
				bgGradient,
				'shadow-lg',
				glowEffect
			)}
		>
			<GradientOverlay variant="secondary" />
			{text === 'Done' && (
				<div className="w-4 h-4 bg-white/25 rounded-sm border border-white/40 flex items-center justify-center relative z-10 shadow-sm">
					<Check className="w-3 h-3 text-white drop-shadow-sm" />
				</div>
			)}
			<span className="relative z-10 drop-shadow-sm">{text}</span>
		</div>
	)
}
