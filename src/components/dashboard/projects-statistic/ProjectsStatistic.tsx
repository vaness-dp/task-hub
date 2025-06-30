'use client'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import { useProjectsStatistic } from '@/hooks/useProjectsStatistic'

import { ProjectsStatisticHeader } from './ProjectsStatisticHeader'
import { ProjectsChart } from './projects-chart/ProjectsChart'

export function ProjectsStatistic() {
	const { selectedPeriod, setSelectedPeriod, data } = useProjectsStatistic()

	return (
		<div className="projects-statistic-inner">
			<GradientOverlay />
			<InnerGlow />

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
