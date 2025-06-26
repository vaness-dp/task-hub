import { ProjectStatCard } from './ProjectStatCard'
import { PROJECT_STATS_DATA } from './project-stats.data'

export function ProjectStats() {
	return (
		<>
			{PROJECT_STATS_DATA.map(projectStat => (
				<ProjectStatCard
					key={projectStat.id}
					projectStat={projectStat}
				/>
			))}
		</>
	)
}
