interface Props {
	active?: boolean
	payload?: Array<{
		color: string
		dataKey: string
		value: number
	}>
	label?: string
}

export function CustomTooltip({ active, payload, label }: Props) {
	if (!active || !payload?.length) return null

	return (
		<div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-2xl p-4 shadow-lg relative overflow-hidden">
			<div className="relative z-10">
				<p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{label}</p>
				<div className="space-y-2">
					{payload.map((entry, index) => (
						<div
							key={index}
							className="flex items-center justify-between space-x-4"
						>
							<div className="flex items-center space-x-2">
								<div
									className="w-3 h-3 rounded-full shadow-sm"
									style={{ backgroundColor: entry.color }}
								/>
								<span className="text-xs text-gray-600 dark:text-gray-400">
									{entry.dataKey === 'projects' ? 'Total Projects' : 'Completed'}
								</span>
							</div>
							<span className="text-sm font-medium text-gray-900 dark:text-white">
								{entry.value}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
