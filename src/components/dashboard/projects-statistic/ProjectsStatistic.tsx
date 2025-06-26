'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { ProjectsChart } from './ProjectsChart'
import { mockChartData } from './projects-statistic.data'

type Period = 'Monthly' | 'Yearly'

export function ProjectsStatistic() {
	const [selectedPeriod, setSelectedPeriod] = useState<Period>('Yearly')

	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral flex flex-col h-full">
			{/* Заголовок с переключателем */}
			<div className="flex items-center justify-between mb-6 flex-shrink-0">
				<h3 className="text-lg font-semibold text-primary-content">Projects Statistic</h3>

				<div className="relative">
					<select
						value={selectedPeriod}
						onChange={e => setSelectedPeriod(e.target.value as Period)}
						className="appearance-none bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl px-4 py-2 pr-10 text-sm text-primary-content focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-all"
					>
						<option value="Monthly">Monthly</option>
						<option value="Yearly">Yearly</option>
					</select>
					<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
				</div>
			</div>

			{/* График - занимает оставшееся место */}
			<div className="flex-1 min-h-0">
				<ProjectsChart
					data={mockChartData[selectedPeriod]}
					period={selectedPeriod}
				/>
			</div>
		</div>
	)
}
