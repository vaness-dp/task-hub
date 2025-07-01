'use client'

import { GradientOverlay } from '@/ui/glass/GradientOverlay'
import { InnerGlow } from '@/ui/glass/InnerGlow'

import type { ITodayTask } from '@/types/task.types'

import { TodayTasksHeader } from './TodayTasksHeader'
import { TimelineChart } from './timeline-chart/TimelineChart'
import { TEAM_MEMBERS_DATA } from './today-tasks.data'

interface Props {
	tasks: ITodayTask[]
}

export function TodayTasks({ tasks }: Props) {
	return (
		<div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 rounded-3xl p-8 border border-white/30 dark:border-white/10 relative overflow-hidden h-130">
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10 h-full flex flex-col">
				<TodayTasksHeader teamMembers={TEAM_MEMBERS_DATA} />

				<div className="flex-1 mt-8">
					<TimelineChart tasks={tasks} />
				</div>
			</div>
		</div>
	)
}
