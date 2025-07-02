'use client'

import { Chat } from '@/components/dashboard/chat/Chat'
import { Header } from '@/components/dashboard/header/Header'
import { ProjectStats } from '@/components/dashboard/project-stats/ProjectStats'
import { ProjectsStatistic } from '@/components/dashboard/projects-statistic/ProjectsStatistic'
import { LastTasks } from '@/components/dashboard/tasks/last-tasks/LastTasks'
import { TodayTasks } from '@/components/dashboard/tasks/today-tasks/TodayTasks'

import { MOCK_LAST_TASKS, MOCK_TODAY_TASKS } from '@/data'

export function Dashboard() {
	return (
		<div className="grid grid-cols-[1fr_370px] h-screen overflow-hidden">
			<div className="p-6 overflow-y-auto">
				<Header />

				<div className="dashboard-grid">
					<div className="project-stats-container">
						<ProjectStats />
					</div>

					<div className="projects-statistic">
						<ProjectsStatistic />
					</div>

					<div className="last-tasks">
						<LastTasks tasks={MOCK_LAST_TASKS} />
					</div>

					<div className="today-tasks">
						<TodayTasks tasks={MOCK_TODAY_TASKS} />
					</div>
				</div>
			</div>

			<Chat />
		</div>
	)
}
