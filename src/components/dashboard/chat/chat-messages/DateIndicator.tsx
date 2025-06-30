export function DateIndicator() {
	return (
		<div className="flex justify-center">
			<div className="px-3 py-1 backdrop-blur-sm bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-full text-xs text-gray-600 dark:text-gray-400 relative overflow-hidden">
				<span className="relative z-10">Today</span>
			</div>
		</div>
	)
}
