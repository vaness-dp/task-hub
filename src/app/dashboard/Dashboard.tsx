'use client'

import { MessageSquare } from 'lucide-react'
import { useState } from 'react'

import { ChatWrapper } from '@/components/dashboard/chat/ChatWrapper'
import { Header } from '@/components/dashboard/header/Header'
import { ProjectStats } from '@/components/dashboard/project-stats/ProjectStats'
import { ProjectsStatistic } from '@/components/dashboard/projects-statistic/ProjectsStatistic'
import { LastTasks } from '@/components/dashboard/tasks/last-tasks/LastTasks'
import { TodayTasks } from '@/components/dashboard/tasks/today-tasks/TodayTasks'
import { MOCK_TODAY_TASKS } from '@/components/dashboard/tasks/today-tasks/today-tasks.data'

import { ToggleButton } from '@/ui/chat-elements/ToggleButton'

import { cn } from '@/utils/styles'

import { MOCK_LAST_TASKS } from '@/data/last-tasks.data'

export function Dashboard() {
	const [isChatOpen, setIsChatOpen] = useState(true)

	const toggleChat = () => setIsChatOpen(prev => !prev)

	return (
		<div className="relative h-full">
			<div className="fixed top-5 right-4 z-50">
				<ToggleButton
					icon={MessageSquare}
					isOpen={isChatOpen}
					onClick={toggleChat}
					position="right"
					tooltip={isChatOpen ? 'Hide Chat' : 'Show Chat'}
				/>
			</div>

			<div
				className="grid h-full"
				style={{
					gridTemplateColumns: `1fr ${isChatOpen ? '370px' : '0px'}`,
					transition: 'grid-template-columns 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
				}}
			>
				<div className="p-6 overflow-y-auto">
					<Header isChatOpen={isChatOpen} />

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

				<div
					className={cn(
						'overflow-hidden transition-all duration-400 ease-out',
						isChatOpen ? 'opacity-100' : 'opacity-0'
					)}
				>
					<ChatWrapper isOpen={isChatOpen} />
				</div>
			</div>
		</div>
	)
}
