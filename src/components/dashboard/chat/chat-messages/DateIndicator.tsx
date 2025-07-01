import { GradientOverlay } from '@/ui/glass/GradientOverlay'

export function DateIndicator() {
	return (
		<div className="flex justify-center">
			<div className="relative px-3 py-1 backdrop-blur-xl bg-white/60 dark:bg-neutral-800/80 border border-white/30 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300 overflow-hidden">
				<GradientOverlay variant="secondary" />
				<span className="relative z-10">Today</span>
			</div>
		</div>
	)
}
