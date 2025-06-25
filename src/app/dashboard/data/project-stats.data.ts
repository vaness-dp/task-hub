import type { IProjectStat } from '../project-stats/projects-stats.types'

export const PROJECT_STATS_DATA: IProjectStat[] = [
	{
		id: 1,
		value: 92,
		label: 'Active Projects',
		bgColor: 'bg-violet-300',
		icon: '/images/icons/project-stats/active-projects.svg'
	},
	{
		id: 2,
		value: 35,
		label: 'On Going Projects',
		bgColor: 'bg-yellow-300',
		icon: '/images/icons/project-stats/ongoing-projects.svg'
	},
	{
		id: 3,
		value: 1149,
		label: 'Working hours',
		bgColor: 'bg-pink-300',
		icon: '/images/icons/project-stats/working-hours.svg'
	}
]
