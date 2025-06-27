import { ChevronDown } from 'lucide-react'

import type { Period } from '@/hooks/useProjectsStatistic'

interface Props {
	selectedPeriod: Period
	onPeriodChange: (period: Period) => void
}

// TODO: вынести эффекты в отдельный компонент

export function ProjectsStatisticHeader({ selectedPeriod, onPeriodChange }: Props) {
	return (
		<div className="flex items-center justify-between mb-6 flex-shrink-0">
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects Statistic</h3>

			<div className="relative">
				<select
					value={selectedPeriod}
					onChange={e => onPeriodChange(e.target.value as Period)}
					className="appearance-none backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl px-4 py-2 pr-10 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer transition-all duration-200 hover:bg-white/50 dark:hover:bg-white/8 relative overflow-hidden"
				>
					<option value="Monthly">Monthly</option>
					<option value="Yearly">Yearly</option>
				</select>

				{/* Effects */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
				<div className="absolute inset-[1px] border border-white/40 rounded-2xl pointer-events-none dark:border-transparent" />

				<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none z-10" />
			</div>
		</div>
	)
}
