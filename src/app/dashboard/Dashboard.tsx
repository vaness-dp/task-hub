// components/Dashboard.tsx
'use client'

import { Chat } from '@/components/dashboard-layout/chat/Chat'
import { Header } from '@/components/dashboard-layout/header/Header'

import { ProjectStats } from './project-stats/ProjectStats'

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

export function Dashboard() {
	return (
		<div className="grid grid-cols-[1fr_370px] h-screen overflow-hidden">
			{/* Основная область */}
			<div className="p-6 overflow-y-auto">
				<Header />

				<div className="grid grid-cols-[300px_1fr] gap-6">
					{/* Левая колонка */}
					<div className="space-y-6">
						<ProjectStats />
					</div>

					{/* <div className="space-y-6">
						<ProjectsStatistic />

						<LastTasks />

						<TodayTasks />
					</div> */}
				</div>
			</div>

			{/* Чат */}
			<Chat />
		</div>
	)
}
