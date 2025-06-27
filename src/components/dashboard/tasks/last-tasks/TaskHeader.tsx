import { Plane } from 'lucide-react'

import type { ITask } from '@/types/task.types'

interface Props {
	task: ITask
}

export function TaskHeader({ task }: Props) {
	return (
		<div className="flex items-start justify-between mb-3">
			<div className="flex items-start space-x-3 flex-1 min-w-0">
				<div className="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30 dark:border-white/20 relative overflow-hidden backdrop-blur-sm group-hover:bg-white/30 dark:group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
					<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl" />
					{task.icon === '✈️' ? (
						<Plane className="w-6 h-6 text-primary relative z-10 opacity-95 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm" />
					) : (
						<span className="text-2xl relative z-10 opacity-95 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
							{task.icon}
						</span>
					)}
				</div>
				<div className="flex-1 min-w-0">
					<h3 className="font-semibold text-gray-900 dark:text-white text-base leading-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300 origin-left">
						{task.title}
					</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
						{task.subtitle}
					</p>
				</div>
			</div>

			{/* Team avatars */}
			<div className="flex -space-x-2 flex-shrink-0 ml-3">
				{task.team.slice(0, 3).map((member, index) => (
					<div
						key={index}
						className="w-10 h-10 bg-white/40 dark:bg-white/20 rounded-full border-2 border-white/50 dark:border-white/30 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 relative overflow-hidden backdrop-blur-sm shadow-sm transition-colors duration-300"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 rounded-full" />
						<span className="relative z-10 drop-shadow-sm">{member}</span>
					</div>
				))}
			</div>
		</div>
	)
}
