import { ChevronDown } from 'lucide-react'

import { InnerGlow } from '@/ui/glass/InnerGlow'

import type { Period } from '@/hooks/useProjectsStatistic'

interface Props {
	selectedPeriod: Period
	onPeriodChange: (period: Period) => void
}

export function ProjectsStatisticHeader({ selectedPeriod, onPeriodChange }: Props) {
	return (
		<div className="flex items-center justify-between mb-6 flex-shrink-0">
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects Statistic</h3>

			<div className="relative">
				<select
					value={selectedPeriod}
					onChange={e => onPeriodChange(e.target.value as Period)}
					className="projects-statistic-select"
				>
					<option value="Monthly">Monthly</option>
					<option value="Yearly">Yearly</option>
				</select>

				<InnerGlow className="rounded-2xl pointer-events-none" />

				<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none z-10" />
			</div>
		</div>
	)
}
