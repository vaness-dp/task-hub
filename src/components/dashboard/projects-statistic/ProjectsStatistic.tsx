'use client'

import { useProjectsStatistic } from '@/hooks/useProjectsStatistic'

import { ProjectsStatisticHeader } from './ProjectsStatisticHeader'
import { ProjectsChart } from './projects-chart/ProjectsChart'

// TODO: вынести декор и эффекты в отдельный компонент

export function ProjectsStatistic() {
	const { selectedPeriod, setSelectedPeriod, data } = useProjectsStatistic()

	return (
		<div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 rounded-3xl p-6 shadow-lg border border-white/30 dark:border-white/10 flex flex-col h-full relative overflow-hidden">
			{/* Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/8 dark:to-transparent rounded-3xl" />
			<div className="absolute inset-[1px] border border-white/40 rounded-3xl pointer-events-none dark:border-transparent" />

			{/* Decorative elements */}
			<div className="absolute top-4 right-4 w-3 h-3 bg-white/15 dark:bg-white/10 rounded-full" />
			<div className="absolute bottom-4 left-4 w-2 h-2 bg-white/12 dark:bg-white/8 rounded-full" />

			<div className="relative z-10 flex flex-col h-full">
				<ProjectsStatisticHeader
					selectedPeriod={selectedPeriod}
					onPeriodChange={setSelectedPeriod}
				/>

				<div className="flex-1 min-h-0">
					<ProjectsChart
						data={data}
						period={selectedPeriod}
					/>
				</div>
			</div>
		</div>
	)
}
