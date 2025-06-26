'use client'

import { Chat } from '@/components/dashboard/chat/Chat'
import { Header } from '@/components/dashboard/header/Header'

import { ProjectStats } from '../../components/dashboard/project-stats/ProjectStats'
import { ProjectsStatistic } from '../../components/dashboard/projects-statistic/ProjectsStatistic'

export function Dashboard() {
	return (
		<div className="grid grid-cols-[1fr_370px] h-screen overflow-hidden">
			{/* Основная область */}
			<div className="p-6 overflow-y-auto">
				<Header />

				{/* Контейнер для карточек и статистики */}
				<div className="dashboard-grid">
					<div className="project-stats-container">
						<ProjectStats />
					</div>

					<div className="projects-statistic">
						<ProjectsStatistic />
					</div>

					{/* TODO: Last Tasks */}
					{/* TODO: Today's Tasks */}
				</div>
			</div>

			<Chat />
		</div>
	)
}
