import * as m from 'framer-motion/m'
import { Plus } from 'lucide-react'

import { GradientOverlay } from '@/components/ui/glass/GradientOverlay'
import { InnerGlow } from '@/components/ui/glass/InnerGlow'

import { lastTasksCardAnimations } from '@/constants/animations/dashboard/last-tasks-card.animations'

interface Props {
	onCreateTask: () => void
}

export function TaskCreateCard({ onCreateTask }: Props) {
	return (
		<m.div
			initial="initial"
			whileHover="hover"
			variants={lastTasksCardAnimations.basic}
			className="last-tasks-card cursor-pointer group"
			onClick={onCreateTask}
		>
			<GradientOverlay />
			<InnerGlow />

			<div className="relative z-10 p-6 flex flex-col items-center justify-center h-full text-center">
				{/* Plus Icon */}
				<m.div
					variants={lastTasksCardAnimations.intense}
					className="w-16 h-16 backdrop-blur-xl bg-gradient-to-br from-primary/80 to-primary rounded-3xl flex items-center justify-center shadow-xl border border-white/30 dark:border-white/20 relative overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300"
				>
					<GradientOverlay
						variant="secondary"
						className="rounded-3xl"
					/>
					<Plus className="w-8 h-8 text-white relative z-10" />
				</m.div>

				{/* Text */}
				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Task</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">Click to add a new task</p>
				</div>

				{/* Decorative Elements */}
				<div className="absolute inset-0 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

				{/* Animated Background */}
				<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
		</m.div>
	)
}
