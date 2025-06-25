// components/projects-statistic/ProjectsStatistic.tsx
'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

// components/projects-statistic/ProjectsStatistic.tsx

export function ProjectsStatistic() {
	const [period, setPeriod] = useState('Yearly')

	return (
		<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
			{/* Заголовок */}
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-lg font-semibold text-[#2a2a2a] dark:text-[#f5f5f5]">
					Projects Statistic
				</h3>

				<div className="relative">
					<select
						value={period}
						onChange={e => setPeriod(e.target.value)}
						className="appearance-none bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl px-3 py-2 pr-8 text-sm text-[#2a2a2a] dark:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-primary"
					>
						<option>Yearly</option>
						<option>Monthly</option>
						<option>Weekly</option>
					</select>
					<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
				</div>
			</div>

			{/* График (заглушка) */}
			<div className="h-64 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
						<span className="text-2xl">📊</span>
					</div>
					<p className="text-neutral-500 dark:text-neutral-400">Chart will be here</p>
				</div>
			</div>
		</div>
	)
}
